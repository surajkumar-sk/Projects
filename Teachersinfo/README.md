# Intro - 

This website takes district name and designation as a form data and returns all
the teachers details who work in that district under that designation. Behind
the scene the server just has a Search algorithm that takes form data does
the search in excel file and returns all the matching entries.

*There might be better ways of doing than what i did, feel free to comments a better approach, but i belive any solution other than what i implemented would take mostly the same amount of resources.*

# Languages and libraries - 

Html , Css, Javascript, xlsx(js library), multer and few Google fonts

# Code Concept and Details - 

I can't share the actual excel data containing all the info, just the code . 

The basic logic behind the code is
1. servers sends index.html to get parameters to search for as an input.
2. server recieves the data , searches the excel file and returns all the data.

