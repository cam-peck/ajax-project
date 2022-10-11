/* exported data */

var data = {
  view: 'town-entries',
  towns: [],
  currentTown: {},
  currentCollection: '',
  currentCollectionItem: {},
  editing: null,
  nextEntryId: 1,
  currentVillagers: [],
  collectionData: {}
};

var previousData = localStorage.getItem('acnh-tracker-data');
if (previousData !== null) {
  data = JSON.parse(previousData);
}
window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('acnh-tracker-data', dataJSON);
});
