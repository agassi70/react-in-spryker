FROM node:9.5.0

# Create app directory
WORKDIR /usr/src/app

# Copy local npm dependencies list
COPY package*.json ./

# Install local npm dependencies
RUN npm i

# Bundle app source
COPY . .

# Transpile app code
RUN npm run dist

# Expose ports without publishing them to the host machine - they’ll only be accessible to linked services.
# Only the internal port can be specified.
# Open ports
EXPOSE 3000

# Command to run app in container
CMD [ "npm", "start" ]
