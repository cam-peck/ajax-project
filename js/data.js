/* exported data */

var data = {
  view: '',
  towns: [],
  currentTown: {},
  editing: null,
  nextEntryId: 1,
  currentVillagers: []
};

var previousData = localStorage.getItem('acnh-tracker-data');
if (previousData !== null) {
  data = JSON.parse(previousData);
}
window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('acnh-tracker-data', dataJSON);
});
