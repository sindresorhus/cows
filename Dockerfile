FROM    centos:centos6

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN     yum install -y epel-release
# Install Node.js and npm
RUN     yum install -y nodejs npm

COPY package.json ./package.json

RUN  npm install 

COPY . ./

CMD ["npm", "test"]