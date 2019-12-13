# READX
A speed reader POC. Space bar pauses reading and shows word context. 

# Setup
  1. Clone repo
  1. start both api and ui portions by running the following command `npm run start` in each directory.

# Components
## UI
This is a react app that provides a URL input to pick the source of the content. It then shows text content one word at a time. You can pause the speed reader by pressing space and it will show context of the current sentence(s). 

## API
Provides an endpoint that takes a target url, requests the content and uses a library to extract the text content and return it. Basically stripping HTML and misc.
