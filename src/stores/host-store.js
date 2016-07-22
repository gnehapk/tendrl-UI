(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.service("hostStore", hostStore);

    /*@ngInject*/
    function hostStore($q, hostFactory, dataStorage) {

        /* Cache the reference to this pointer */
        var store = this,
            hostData;

        store.getHostList = function () {

            return hostFactory.getHostList()
                    .then(function (data) {

                        hostData = _createHostList(data);
                        return hostData;
                    });
        };

        function _createHostList(data) {
            var len = data.length,
                mData = [],
                temp,
                i;

            for ( i = 0; i < len; i++) {

                temp = {};
                temp.status = "m_active";
                temp.name = data[i].hostName;
                temp.clusterName = dataStorage.getClusterInfo().clusterName;
                temp.volumeUsed = "m_75";
                temp.totalVolume =  "m_128";
                temp.volumePercentage = 75;
                temp.ip = "m_123.45.67.890";
                temp.alerts = "m_2";
                temp.cpuUsed = "m_57";
                temp.memoryUsed = "m_67";
                temp.role = "m_monitor";

                mData.push(temp);

            }

            return mData;
        }

    }

})();
