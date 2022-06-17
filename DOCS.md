# BYBORRE - technical assignment


# Architecture 

The task was broken down into various components which represents different sections of the app.

1. YarnHeader - This component represents the top part of the app which contains the heading text and save button.

2. YarnContentInfo - This component represents the left part of the app which contains headings and paragraphs

3. YarnWriteUp - This component represents the heading and paragraph used in the YarnContentInfo component

4. YarnContentSelection - This component represents the right part of the app which contains the active selected colors and yarn library

5. YarnActiveColorTile - This component represents the individual active selected color which is listed out in the YarnContentSelection component

6. YarnLibrary - This component represents a color selector popup that contains various ranges of colors gotten from the yarn-colors.json file under the data folder



# Store

To ensure proper distribution of data and avoidance of prop drilling among the children components, Vuex store was put to use.

1. State - The state contains the preset active 'selectedColors' thats rendered in the YarnContentSelection component

2. Getters - The getters contains a 'getSelectedColor' function that returns the 'selectedColors' state

3. Mutations -  The mutations contains a 'updateSelectedColor' function that updates the 'selectedColors' state each time a new color is selected from the YarnLibrary component



# Testing

To ensure reliabilty and easy bug detection during the development cycle, Unit testing with Vue-Test-Utils with Jest has been put to use.


# Deployment

The app is been deployed on firebase and the source code has been shipped on Github version control tool
