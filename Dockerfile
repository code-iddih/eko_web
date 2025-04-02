# Use Nginx as a base image
FROM nginx:alpine

# Set the working directory to Nginx's static content folder
WORKDIR /usr/share/nginx/html

# Remove the default Nginx files
RUN rm -rf ./*

# Copy all files from your project into the container
COPY . .

# Expose port 80 for serving content
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
