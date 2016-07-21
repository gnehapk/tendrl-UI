(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.service("osdStore", ["osdFactory", osdStore]);

    /*@ngInject*/
    function osdStore(osdFactory) {

        /* Cache the reference to this pointer */
        var store = this,
            osdData;

        store.getOSDList = function () {

            return osdFactory.getOSDList()
                    .then(function (osdListData) {

                        _createOSDListData(osdListData);
                        return osdListData;
                    });
        };

        store.getOSDDetails = function(osd) {

            return osdFactory.getOSDDetails(osd)
                .then(function(data) {

                    osdData = _createOSDDetails(data);
                    return osdData;
                });
        };

        function _createOSDListData(data) {
            var len = data.length,
                i;

            for ( i = 0; i < len; i++) {
                data[i].utilisation = 50;
            }

        }

        //mocked now as API doesnt support the data
        function _createOSDDetails(data) {
            var temp = {};

            temp.host = data.hostname;
            temp.utilisation = "m_50%";
            temp.weight = data.weight;
            temp.storageProfile = "m_SSD";
            temp.pool = "m_Pool1";
            temp.devicePath = "m_host1:/dev/disk/pci-0005:00-sas";
            temp.name = "OSD." + data.osd;
            temp.state = data.state;
            temp.uuid = data.uuid;

            temp.journal = {};
            temp.journal.devicePath = "m_host1:/var/lib/ceph/osd/ceph-9/journal";
            temp.journal.capacity = "m_32";

            temp.domain = {};
            temp.domain.dataCenter = "m_DC1";
            temp.domain.room = "m_Server-room";
            temp.domain.rack = "m_Rack1";
            temp.domain.chasis = "m_Chasis1";
            temp.domain.host = data.hostname;

            return temp;
        }

    }

})();
