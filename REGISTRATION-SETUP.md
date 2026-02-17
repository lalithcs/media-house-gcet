# Media House Registration Form - Setup Guide

## 📋 What You Have Now

1. **Registration Form** - Added to your Coming Soon page with a modal popup
2. **Google Apps Script** - Code to receive form data and save to Google Sheets
3. **Email Notifications** - Automatic emails when someone registers

---

## 🚀 Setup Instructions

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"Media House Registrations"**
4. In the first row (Row 1), add these column headers:

```
Timestamp | Name | Email | Phone | College ID | Department | Year | Reason | Skills
```

### Step 2: Deploy Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code in the script editor
3. Open the file `google-apps-script.js` from your project folder
4. **Copy ALL the code** from that file
5. **Paste it** into the Apps Script editor
6. **IMPORTANT:** Change line 94 - replace `mediahouse@gcet.ac.in` with your actual email:
   ```javascript
   var recipientEmail = "your-actual-email@gcet.ac.in";
   ```
7. Click the **Save** button (disk icon)
8. Name your project: "Media House Registration Handler"

### Step 3: Deploy as Web App

1. Click **Deploy** button (top right) > **New deployment**
2. Click the ⚙️ gear icon next to "Select type"
3. Choose **"Web app"**
4. Fill in the settings:
   - **Description:** Media House Registration Form
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** > **Go to "Media House Registration Handler" (unsafe)**
   - Don't worry, this is YOUR script, it's safe
9. Click **Allow**
10. **COPY the "Web app URL"** - it looks like:
    ```
    https://script.google.com/macros/s/AKfycby.../exec
    ```

### Step 4: Connect to Your Website

1. Open `index.html` in your code editor
2. Find line that says (around line 124):
   ```javascript
   const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied
4. Save the file

Example:
```javascript
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby123abc456def/exec';
```

### Step 5: Test It!

1. Start your local server:
   ```powershell
   python -m http.server 8080
   ```
2. Open http://localhost:8080 in your browser
3. Click the **"Register for Recruitment"** button
4. Fill out the test form with fake data
5. Click **Submit Application**
6. Check your Google Sheet - the data should appear!
7. Check your email - you should receive a notification!

### Step 6: Deploy to Production

Once tested, commit and push to GitHub:

```powershell
git add .
git commit -m "Add registration form with Google Sheets integration"
git push origin main
```

Vercel will automatically deploy your changes!

---

## 📊 Viewing Registrations

### In Google Sheets
- All registrations appear automatically in your Google Sheet
- Each row is one registration
- Data is timestamped automatically

### Export Data
- **File > Download > .csv** to export for analysis
- **File > Download > .xlsx** for Excel

---

## 📧 Email Notifications

Every time someone registers, you'll receive an email with:
- Student's name and contact info
- Their department and year
- Why they want to join
- Their skills/interests

**To change notification email:**
1. Open Apps Script editor in Google Sheets
2. Find line 94: `var recipientEmail = "..."`
3. Change to your email
4. Save and redeploy (Deploy > Manage deployments > Edit > Deploy)

---

## 🎨 Customizing the Form

### Add More Fields

In `index.html`, add more form fields like this:

```html
<label class="form-label">Your New Field <span class="text-red-500">*</span></label>
<input type="text" name="newField" class="form-input" required>
```

Then update `google-apps-script.js`:
1. Add your field to the headers list in setup instructions
2. Add to `rowData` array (line 27-36):
   ```javascript
   data.newField || ''
   ```

---

## 🔧 Troubleshooting

### Form not submitting?
1. Check browser console (F12) for errors
2. Make sure you replaced `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with actual URL
3. Verify the Apps Script is deployed with "Anyone" access

### Data not appearing in Sheet?
1. Check if the script has permission to edit the Sheet
2. Verify column headers match exactly
3. Check Apps Script logs: Extensions > Apps Script > Executions

### No email notifications?
1. Check spam folder
2. Verify email address in line 94 of Apps Script
3. Gmail has limits: 100 emails/day for free accounts

---

## 🎯 What's Next?

Your registration system is now live! Students can:
1. Visit your Coming Soon page
2. Click "Register for Recruitment"
3. Fill out the form
4. Submit - data goes straight to your Google Sheet!

You can:
- Review applications in Google Sheets
- Export data for analysis
- Receive instant email notifications
- Track registration analytics

---

## 📞 Need Help?

If you face any issues:
1. Check the browser console (F12) for errors
2. Review Apps Script execution logs
3. Test with the `testSubmission()` function in Apps Script

**Happy recruiting! 🎉**
