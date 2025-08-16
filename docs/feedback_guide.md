# Roninmon Beta Feedback Guide

This document outlines the process for collecting and submitting feedback during the Roninmon beta test. It is divided into two sections: one for our valued Beta Testers and one for our Moderators.

---

## Part 1: Guide for Beta Testers

Thank you for helping us test Roninmon! Your feedback is essential for finding bugs and improving the game. Please follow these steps to report your findings.

### Step 1: Join the Official Discord
If you haven't already, please join our private Discord server using the link provided to you.

### Step 2: Locate the Feedback Channel
All beta-related discussion and reporting will happen in the `#beta-feedback` channel.

### Step 3: How to Submit Feedback
There are two primary ways to provide feedback:

**A. Formal Bug & Crash Reports (HIGH PRIORITY)**
For any bugs, crashes, or issues where the game did not behave as expected, please use our official feedback form. This is the best way to ensure we get all the information we need to fix the problem.

1.  **Find the Pinned Link:** In the `#beta-feedback` channel, look for a pinned message at the top containing the link to the "Roninmon Beta Feedback Form".
2.  **Open the Form:** Click the link to open the survey in your browser.
3.  **Fill Out the Form in Detail:** Please be as thorough as possible. The form will ask for the following information:

    *   **Your Wallet Address:** So we can trace your specific data on the backend.
    *   **Test Plan Step:** Choose the step you were on (e.g., "Step 4: Incubating a Roninmon").
    *   **Issue Type:** Choose from `Bug`, `Crash`, `Usability Issue`, `Suggestion`.
    *   **Summary:** A brief, one-sentence summary of the problem.
    *   **Steps to Reproduce:** The exact sequence of actions that caused the issue.
    *   **Expected Result:** What you thought would happen.
    *   **Actual Result:** What actually happened.
    *   **Supporting Media:** A field to upload screenshots or link to video recordings. **This is extremely helpful!**

**B. General Discussion & Suggestions**
The `#beta-feedback` channel is also a place for open discussion. Use it to:
*   Share your general thoughts on the game.
*   Discuss features with other testers.
*   Provide suggestions for improvement that aren't formal bug reports.

---

## Part 2: Guide for Moderators

This section provides instructions for setting up and managing the feedback collection process.

### Task A: Setting Up the Discord Channel

1.  **Create a Private Channel:** Create a new channel named `#beta-feedback`. Ensure its permissions are set so that only users with the "Beta Tester" role can see and post in it.
2.  **Create a Welcome Post:** Write a brief message welcoming testers to the channel and explaining its purpose.
3.  **Pin the Welcome Post & Form Link:** Once the feedback form is created (see Task B), pin the post containing the link to the form so it's always easy for testers to find.

### Task B: Creating the Feedback Survey (using Google Forms)

Google Forms is a free and effective tool for creating a structured feedback survey.

1.  **Go to Google Forms:** Navigate to [forms.google.com](https://forms.google.com).
2.  **Create a New Form:** Start a blank form and title it "Roninmon Beta Feedback Report".
3.  **Add Questions:** Add the following questions to the form, using the specified question types. Mark all relevant fields as "Required".

    *   **Tester Wallet Address:**
        *   Question Type: `Short answer`
        *   Required: `Yes`
    *   **Test Plan Step:**
        *   Question Type: `Dropdown`
        *   Options: Add each step from `docs/beta_flow.md` (e.g., "Step 1: First-Time User Onboarding", "Step 2: Returning User Login", etc.).
        *   Required: `Yes`
    *   **Issue Type:**
        *   Question Type: `Dropdown`
        *   Options: `Bug`, `Crash`, `Usability Issue`, `Suggestion`, `Other`.
        *   Required: `Yes`
    *   **Summary of Issue:**
        *   Question Type: `Short answer`
        *   Required: `Yes`
    *   **Steps to Reproduce:**
        *   Question Type: `Paragraph`
        *   Required: `Yes`
    *   **Expected Result:**
        *   Question Type: `Paragraph`
        *   Required: `Yes`
    *   **Actual Result:**
        *   Question Type: `Paragraph`
        *   Required: `Yes`
    *   **Supporting Media (Screenshot/Video Link):**
        *   Question Type: `File upload`.
        *   Note: You may need to configure settings to allow file uploads from users outside your organization. Set a reasonable file size limit (e.g., 10MB).
        *   Required: `No` (but encouraged)
    *   **Qualitative Feedback (Optional Section):**
        *   Add questions like "On a scale of 1-10, how enjoyable was this feature?" using the `Linear scale` question type.

4.  **Get the Sharable Link:**
    *   Click the "Send" button in the top right.
    *   Go to the "Link" tab (the chain icon).
    *   Copy the provided URL.

5.  **Post and Pin in Discord:**
    *   Go to the `#beta-feedback` channel in Discord.
    *   Create a new, clear post such as: "**Please report all bugs using our official feedback form:** [Paste your link here]".
    *   Pin this message to the channel.
