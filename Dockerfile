# Step 1: Base Image
FROM node:14

# Step 2: Set Working Directory
WORKDIR /usr/src/app

# Step 3: Install Dependencies
# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Step 4: Copy Application
COPY . .

# Step 5: Expose Port
EXPOSE 3000

# Step 6: Start Command
CMD ["node", "vote-app.js"]