# Intro - 

My father is a part of a Teachers Group named "Navodaya Granti". They are a huge
Group with 1000+ teachers. Major part of there activity was to quiz teachers and
provide them with certificates. The quiz was taken using Google form, there were a lot
of google apps out there that automatically converts form data to Pdf certificates and
send them to users but all of them had a limit on number of Certificates they sent which
was an issue with a huge number of teachers taking the quiz. So I implemented a Project
to take the data in an excel file and make certificates as PDf and store them for 
later distribution. I didn't have much time otherwise i would have made a way to 
configure details that needs to be on certificate.


This could be very Helpul for small NGO's or Groups which shows some appreciation for their Community Members work or contribution.

*There might be better ways of doing than what i did, feel free to comments a better approach, but i belive any solution other than what i implemented would take mostly the same amount of resources.*

# Languages and libraries - 

Html , Css, Javascript , Bootstrap , Python, pptx(py library), openpyxl(py library) and few Google fonts

# Code Concept and Details - 

For this code to work you'll need a powerpoint(.pptx) file with
form design and an excel file which contains data.

The basic logic behind the code is
1. Data of people on who's name the certificates are to be made are stored in excel file and the places at which those data will be displayed in certificate are positioned in pptx both of which you'll have to add.
2. the pptx file will taken and modified dynamically so this program can handle multiple inputs.
3. the `auto.py` file takes the pptx and adds the data of each person from excel file one by one in a loop
 and after adding one users data it sends the pptx file to `convertor.js` file.
4. Now `convertor.js` converts the pptx to pdf and saves it in whatever location you want mention in that file.
5. there is also a some module code that i wrote called `pdfmerger.js` which combines as many pdfs as you want 
  you just need specify a folder name and it merges all the pdfs in that folder. Just in case you want to send
  pdfs in bulk.


YOu'll also need an adittional software `LibreOffice` for this code to work , `libreoffice` is used for converting pptx to pdf in this project. This could be launched in a server but you'll need to install `libreoffice` on your server. I didn't write this code for server because i was directly given an excel file so i taught implemeting a server for this and have `libreoffice` on the server might be unneccesary efoorts.

There is a workaroud if you don;t find a way get libreoffice working . YOu could use other websites api to convert file from pptx to pdf. One of them would be `cloud convert` it offers a basic free plan with a limit to number of conversions per day.
