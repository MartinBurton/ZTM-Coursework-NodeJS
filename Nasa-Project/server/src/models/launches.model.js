const launches = new Map();

let latestFlightNumber = 100;

// Sample data used to populate app in testing.
const launch = {
  flightNumber: 100,
  mission: 'Keplar Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b', 
  customers: ['NASA', 'ZTM'],
  upcoming: true,
  success: true
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
};

function getAllLaunches() {
  return Array.from(launches.values());
};

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(latestFlightNumber, 
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ['NASA','ZTM'],
      upcoming: true,
      success: true,
    })
  );
};

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
};