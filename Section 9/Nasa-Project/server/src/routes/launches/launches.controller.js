const { 
  getAllLaunches, 
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById, 
} = require('../../models/launches.model');

// Seperation of concern function that allows the client
// to recieve all launch data from the launches model
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
};

// Seperation of concern function that allows the client to add
// a new launch object to the launches model
// Validation checks for missing properties and invalid dates
// before submitting the new launch to the model
function httpAddNewLaunch(req, res) {
  const launch = req.body;

  // Validation of req body
  if ( !launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    return res.status(400).json({
      error: 'Missing required launch property',
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  
  // Validation of launchDate
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invaild launch Date',
    });
  }

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

// Seperation of concern function that allows the client to abort
// launches.
// Validates that the launch id exists before submiting the request
// to the model
function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  if (!existsLaunchWithId(launchId)) {
    return res.status(404).json({
      error: 'Launch not found'
    });
  }
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
};

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};