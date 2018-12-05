First, create a production build in the build folder by running:

yarn build

Now that the build folder has content, we can build the image:

docker build -t landing-page

To run on port 7000 of our machine:

docker run -d -it -p 7000:3000 landing-page
