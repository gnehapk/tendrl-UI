(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.service("poolStore", ["poolFactory", "dataStorage", poolStore]);

    /*@ngInject*/
    function poolStore(poolFactory, dataStorage) {

        /* Cache the reference to this pointer */
        var store = this,
            poolData;

        store.getPoolList = function () {

            return poolFactory.getPoolList()
                    .then(function (data) {

                        poolData = _createPoolList(data);
                        return poolData;
                    });
        };

        function _createPoolList(data) {
            var len = data.length,
                mData = [],
                temp,
                i;

            for ( i = 0; i < len; i++) {

                temp = {};
                temp.status = "m_active";
                temp.name = data[i].pool_name;
                temp.clusterName = dataStorage.getClusterInfo().clusterName;
                temp.volumeUsed = "m_75";
                temp.totalVolume =  "m_128";
                temp.volumePercentage = 75;
                temp.mode = "m_standard";
                temp.latency = "m_25";
                temp.replicas = data[i].min_size;
                temp.OSDs = "m_10";
                temp.quotas = data[i].quota_max_bytes;
                temp.alerts = "m_2";

                mData.push(temp);

            }

            return mData;
        } 

    }

})();
