/**
 * Media House Registration Form - Google Apps Script
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets and create a new spreadsheet named "Media House Registrations"
 * 2. In the first row, add these headers:
 *    Timestamp | Name | Email | Phone | College ID | Department | Year | Reason | Skills
 * 
 * 3. Go to Extensions > Apps Script
 * 4. Delete any existing code and paste this entire script
 * 5. Click "Deploy" > "New deployment"
 * 6. Click the gear icon next to "Select type" and choose "Web app"
 * 7. Description: "Media House Registration Form"
 * 8. Execute as: "Me"
 * 9. Who has access: "Anyone"
 * 10. Click "Deploy"
 * 11. Copy the "Web app URL" and paste it in index.html where it says 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
 * 12. Click "Authorize access" and grant permissions
 * 
 * That's it! Your form will now save data to the Google Sheet.
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Create array of values in the same order as headers
    var rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.collegeId || '',
      data.department || '',
      data.year || '',
      data.reason || '',
      data.skills || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Send email notification (optional)
    sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Registration received successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      'status': 'online',
      'message': 'Media House Registration Form API is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Send email notification when new registration is received
 * Change the email address to your Media House coordinator email
 */
function sendEmailNotification(data) {
  try {
    var recipientEmail = "mediahouse@gcet.ac.in"; // CHANGE THIS to your email
    var subject = "New Media House Registration: " + data.name;
    
    var body = "New registration received for Media House!\n\n" +
               "Name: " + data.name + "\n" +
               "Email: " + data.email + "\n" +
               "Phone: " + data.phone + "\n" +
               "College ID: " + data.collegeId + "\n" +
               "Department: " + data.department + "\n" +
               "Year: " + data.year + "\n\n" +
               "Why they want to join:\n" + data.reason + "\n\n" +
               "Skills/Interests:\n" + data.skills + "\n\n" +
               "Submitted at: " + data.timestamp;
    
    // Send email
    MailApp.sendEmail(recipientEmail, subject, body);
    
  } catch (error) {
    // Log error but don't fail the main function
    Logger.log("Email notification failed: " + error.toString());
  }
}

/**
 * Optional: Function to get all registrations (for viewing data via API)
 */
function getAllRegistrations() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  return data;
}

/**
 * Optional: Test function to check if everything is working
 */
function testSubmission() {
  var testData = {
    timestamp: new Date().toISOString(),
    name: "Test Student",
    email: "test@gcet.ac.in",
    phone: "+91 99999 99999",
    collegeId: "21BXXX",
    department: "CSE",
    year: "2nd Year",
    reason: "This is a test submission",
    skills: "Testing, Debugging"
  };
  
  var e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  var result = doPost(e);
  Logger.log(result.getContent());
}
