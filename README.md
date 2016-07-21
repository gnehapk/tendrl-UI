# tendrl-UI

# Prerequisite
 1. Make sure that you have install npm and nginx server(https://fedoraproject.org/wiki/Nginx).
 2. Also make sure that you ```gulp``` node packages installed globally.
 3. To install it:<br />
    ```npm install -g gulp``` (Version 3.x.x; Version 4 will break gulp script)<br/>
    

## To run the app follow five simple steps

 1. Modify the ```configuration file``` of nginx server(/etc/nginx/nginx.conf) and point the root path to your repository location.<br />
     
	```server {
	        root     [your path]/tendrl-UI/dist/;
	   }``` <br />
 2. Go to your ```tendrl-UI``` repositry path.
 3. Run command ```npm install```
 4. Run command ```gulp```.
 5. Browse ```http://localhost/StorageManagement/``` and the app is ready to use.
