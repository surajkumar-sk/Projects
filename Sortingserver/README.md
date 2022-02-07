# Intro - 

There was a need for sorting Telangana Teachers data depending on a list of factors, I implemented a server to take an excel file as an input and had the logic and parameters for sorting data hard coded in js. The actual sorting was done manually by some officers my sorting server was used just to check for any possible mistakes that might have occured while sorting the data.

*There might be better ways of doing than what i did, feel free to comments a better approach, but i belive any solution other than what i implemented would take mostly the same amount of resources.*

# Languages and libraries - 

Html , Css, Javascript, xlsx(js library), multer and few Google fonts

# Code Concept and Details - 

The basic logic behind the code is
1. the server sends a index.html file that contains upload excel file button.
2. server recieves the excel file , opens the file with xlsx library , and then sorts the data
   as per the hard coded parameters. 
3. after sorting sends the excel file back to the user.
