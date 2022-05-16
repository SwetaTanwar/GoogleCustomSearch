# GoogleCustomSearch:
A react native mobile app to fetch data from google custom search api and display the results


## Objective:
Design a simple 3 screen app to fetch images from Google and display them in a list.

  Screen 1: Search Screen. Users should be able to type in the search string for image query
  Screen 2: The search results of the previous screen should be displayed in this list. The results should be displayed as images plus some metadata
  Screen 3: On clicking any of these images on the previous screen, more details of the image should be shown here.

## API to be used:
```bash
  curl -X GET \'https://www.googleapis.com/customsearch/v1?q=harrypotter&cx=011476162607576381860:ra4vmliv9ti&key=<API KEY>' \
    -H 'Content-Type: application/json' \ 
    -H 'cache-control: no-cache’
```
  
  Sample JSON Response: [find here](https://pastebin.com/6CqcVDZP)
  
## Note:
  Please get your own API key from a separate Google project.

## Screenshots:

<img src="src/assets/screenshots/flow.gif" width="375" height="812"/>
