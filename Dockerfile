# Step 1: Use the official Nginx image
FROM nginx:stable-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Step 3: Copy the build folder into the container
COPY build/ .

# Step 4: Copy the custom nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 5: Expose the port that Nginx will use
EXPOSE 80

# Step 6: Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
