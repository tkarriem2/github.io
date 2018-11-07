

var idxDBnm = 'mtkarriem-webres';
self.onmessage = function(event) {
        var req = indexedDB.open(idxDBnm, 1);
        req.onupgradeneeded = function (e) {
          self.postMessage('DB Upgrade Needed - Scheduled: ++Prod Release');              
        };
        req.onsuccess = function (e) {
          self.postMessage('Success - DB Open');    
        };
        req.onerror = function(e) {
          self.postMessage('DB Error - ');    
        }
    };
/*
request.onupgradeneeded = function(evt) {

        var dataBase = evt.target.result;
        var txn = evt.target.transaction;
        //////////
        var storeCreateIndex = function (objectStore, name, options) {
            if (!objectStore.indexNames.contains(name)) {
                objectStore.createIndex(name, name, options);
            }
        }
        //////////
        var catalogItem, mangaItem, chapterItem, artworkItem;
        if (evt.newVersion != evt.oldVersion) {
            // Get exiting objectStore
            catalogItem = txn.objectStore('CatalogItem');
            mangaItem = txn.objectStore('MangaItem');
            chapterItem = txn.objectStore('ChapterItem');
            artworkItem = txn.objectStore('ArtworkList');
        } else {
            // Fist creation of database objectStore
            catalogItem = dataBase.db.createObjectStore("CatalogItem", { keyPath: "key" });
            mangaItem = dataBase.db.createObjectStore("MangaItem", { keyPath: "key" });
            chapterItem = dataBase.db.createObjectStore("ChapterItem", { keyPath: "key" });
            artworkItem = dataBase.db.createObjectStore("ArtworkList", { keyPath: "key" });
        }
        //////////
        storeCreateIndex(catalogItem, "popularity", { unique: false });
        storeCreateIndex(catalogItem, "author", { unique: false });
        storeCreateIndex(catalogItem, "status", { unique: false });
        storeCreateIndex(catalogItem, "isFavorite", { unique: false });
        storeCreateIndex(chapterItem, "isBookmarked", { unique: false });
        storeCreateIndex(chapterItem, "isDownloaded", { unique: false });
}
*/