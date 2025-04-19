# Wellness Pro - Full-Stack Wellness Web App

## Overview

Wellness Pro is a comprehensive full-stack web application designed to help users track and improve their mental, physical, and emotional well-being. The app offers personalized wellness recommendations, health assessments, mood tracking, and a variety of wellness tools to support holistic health. Users can set goals, log activities, and monitor progress through an intuitive and modern interface.

---

## List of All Pages and Features

### 1. Dashboard (`public/dashboard.html`)
- **Description:** Central hub providing an overview of user goals, assessments, and quick links to wellness features.
- **Features:**
  - Displays mental, emotional, and physical well-being goals with progress bars.
  - Visualizes assessment results with charts.
  - Quick access to personalized recommendations.
- **Frontend Files:** `dashboard.html`, `components/nav.html`
- **Backend Interaction:** Fetches user-specific goals and assessment data via API routes.
- **Data Collected:** User goals, assessment scores.
- **Special Assets:** Chart.js for data visualization.

### 2. Mental Health Assessment (`public/mental-assessment.html`)
- **Description:** Questionnaire to evaluate stress, anxiety, mood, sleep quality, and emotional resilience.
- **Features:** Instant feedback based on responses.
- **Frontend Files:** `mental-assessment.html`, `components/nav.html`
- **Backend Interaction:** Submits assessment data to backend for storage and analysis.
- **Data Collected:** Assessment responses.
- **Special Assets:** Form inputs with validation.

### 3. Physical Health Assessment (`public/physical-assessment.html`)
- **Description:** Assesses fitness, activity levels, nutrition habits, and physical health goals.
- **Features:** Feedback based on user input.
- **Frontend Files:** `physical-assessment.html`, `components/nav.html`
- **Backend Interaction:** Stores assessment results.
- **Data Collected:** User responses on physical health.
- **Special Assets:** Form inputs.

### 4. Emotional Health Assessment (`public/emotional-assessment.html`)
- **Description:** Evaluates emotional regulation, coping mechanisms, resilience, and relationships.
- **Features:** Provides feedback and recommendations.
- **Frontend Files:** `emotional-assessment.html`, `components/nav.html`
- **Backend Interaction:** Stores emotional health data.
- **Data Collected:** User responses.
- **Special Assets:** Form inputs.

### 5. Mood Tracker (`public/mood-tracker.html`)
- **Description:** Allows users to log daily moods and emotions.
- **Features:** Visualizes mood trends over time.
- **Frontend Files:** `mood-tracker.html`, `components/nav.html`
- **Backend Interaction:** Stores mood entries.
- **Data Collected:** Mood logs with date and notes.
- **Special Assets:** Chart.js for trend visualization.

### 6. Health Stats Dashboard (`public/health-stats.html`)
- **Description:** Displays physical metrics such as steps, calories, water intake, and exercise frequency.
- **Features:** Visual progress tracking.
- **Frontend Files:** `health-stats.html`, `components/nav.html`
- **Backend Interaction:** Fetches health stats data.
- **Data Collected:** Physical activity metrics.
- **Special Assets:** Chart.js.

### 7. Guided Meditation & Relaxation (`public/meditation.html`)
- **Description:** Provides audio and video content for meditation and breathing exercises.
- **Features:** Embedded media players.
- **Frontend Files:** `meditation.html`, `components/nav.html`
- **Backend Interaction:** None (static content).
- **Data Collected:** None.
- **Special Assets:** Embedded video and audio.

### 8. Goals & Achievements (`public/goals.html`)
- **Description:** Users can set personal wellness goals and track progress.
- **Features:** Add, view, and manage goals.
- **Frontend Files:** `goals.html`, `components/nav.html`
- **Backend Interaction:** Stores user goals.
- **Data Collected:** Goal descriptions and progress.
- **Special Assets:** Interactive form.

### 9. Daily Tips & Affirmations (`public/daily-tips.html`)
- **Description:** Rotating daily wellness tips and motivational affirmations.
- **Features:** Auto-refreshing daily content.
- **Frontend Files:** `daily-tips.html`, `components/nav.html`
- **Backend Interaction:** None (static tips).
- **Data Collected:** None.

### 10. Diet & Nutrition Log (`public/diet-log.html`)
- **Description:** Users can record meals and monitor calorie intake.
- **Features:** Add and view meal logs.
- **Frontend Files:** `diet-log.html`, `components/nav.html`
- **Backend Interaction:** Stores dietary logs.
- **Data Collected:** Meal descriptions, calories, dates.

### 11. Sleep Tracker (`public/sleep-tracker.html`)
- **Description:** Log sleep data and view sleep quality insights.
- **Features:** Visualizes sleep trends.
- **Frontend Files:** `sleep-tracker.html`, `components/nav.html`
- **Backend Interaction:** Stores sleep logs.
- **Data Collected:** Hours slept, sleep quality, dates.
- **Special Assets:** Chart.js.

### 12. Well-being Articles (`public/articles.html`)
- **Description:** Collection of articles on mental, emotional, and physical wellness.
- **Features:** Article previews and links.
- **Frontend Files:** `articles.html`, `components/nav.html`
- **Backend Interaction:** None (static content).

### 13. Settings (`public/settings.html`)
- **Description:** Manage account and app preferences.
- **Features:** Email notifications toggle, dark mode toggle.
- **Frontend Files:** `settings.html`, `components/nav.html`
- **Backend Interaction:** Stores user preferences.
- **Data Collected:** User settings.

### 14. Text-to-Speech (TTS) (`public/tts.html`)
- **Description:** Converts user-entered text to spoken audio.
- **Features:** Text input and speech playback.
- **Frontend Files:** `tts.html`, `components/nav.html`
- **Backend Interaction:** None (uses Web Speech API).

### 15. Speech-to-Text (STT) (`public/stt.html`)
- **Description:** Converts spoken words to text.
- **Features:** Start/stop recording and display transcript.
- **Frontend Files:** `stt.html`, `components/nav.html`
- **Backend Interaction:** None (uses Web Speech API).

### 16. Progress Tracker (`public/progress-tracker.html`)
- **Description:** Visualizes wellness progress over time.
- **Features:** Line charts for mental, physical, and emotional health.
- **Frontend Files:** `progress-tracker.html`, `components/nav.html`
- **Backend Interaction:** Fetches progress data.
- **Special Assets:** Chart.js.

### 17. Custom Wellness Plans (`public/wellness-plans.html`)
- **Description:** Create and manage personalized wellness plans.
- **Features:** Add, view, and edit plans.
- **Frontend Files:** `wellness-plans.html`, `components/nav.html`
- **Backend Interaction:** Stores wellness plans.

### 18. Reminders (`public/reminders.html`)
- **Description:** Set and manage wellness reminders.
- **Features:** Add, view reminders with date/time.
- **Frontend Files:** `reminders.html`, `components/nav.html`
- **Backend Interaction:** Stores reminders.

### 19. External Wellness API Integration (`public/api-integration.html`)
- **Description:** Connects to external wellness APIs to fetch data.
- **Features:** Fetch and display API data.
- **Frontend Files:** `api-integration.html`, `components/nav.html`
- **Backend Interaction:** Fetches external API data.

### 20. Exercise Logging (`public/exercise-logging.html`)
- **Description:** Log exercise activities and durations.
- **Features:** Add and view exercise logs.
- **Frontend Files:** `exercise-logging.html`, `components/nav.html`
- **Backend Interaction:** Stores exercise data.

### 21. Stress Management Tools (`public/stress-management.html`)
- **Description:** Guided breathing and relaxation exercises.
- **Features:** Interactive stress reduction tools.
- **Frontend Files:** `stress-management.html`, `components/nav.html`
- **Backend Interaction:** None.

### 22. Social Sharing (`public/social-sharing.html`)
- **Description:** Share wellness achievements and posts.
- **Features:** Create and view shared posts.
- **Frontend Files:** `social-sharing.html`, `components/nav.html`
- **Backend Interaction:** Stores shared posts.

### 23. Nutrition Tracking (`public/nutrition-tracking.html`)
- **Description:** Monitor dietary intake and nutrition goals.
- **Features:** Add and view nutrition entries.
- **Frontend Files:** `nutrition-tracking.html`, `components/nav.html`
- **Backend Interaction:** Stores nutrition data.

### 24. Personal Journal (`public/personal-journal.html`)
- **Description:** Write and reflect on wellness journey.
- **Features:** Add and view journal entries.
- **Frontend Files:** `personal-journal.html`, `components/nav.html`
- **Backend Interaction:** Stores journal entries.

---

## Backend Integration

- **Node.js/Express:** Serves frontend files, handles API routes for user data, assessments, logs, and authentication.
- **Passport.js:** Manages user authentication with strategies for login, registration, and session management.
- **PostgreSQL:** Stores user data, including profiles, assessments, goals, logs, reminders, and shared content. Tables are structured to relate features to user accounts securely.

---

## Theme Toggle

- Implemented as a toggle button in the navigation bar.
- Uses JavaScript to switch between light and dark themes by toggling a `dark` class on the root HTML element.
- User preference is saved in `localStorage` and applied on page load.
- Tailwind CSS's dark mode utilities are used for styling.

---

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Database:**
   - Set up a PostgreSQL database (e.g., on Render).
   - Update database connection settings in `config/database.js`.

3. **Run the App Locally:**
   ```bash
   npm start
   ```
   - The app will be available at `http://localhost:3000`.

4. **Environment Variables:**
   - Configure environment variables for database credentials and session secrets as needed.

---

## File Structure

```
/public
  ├── components/
  │   └── nav.html          # Navigation menu component
  ├── *.html                # Frontend pages (dashboard, assessments, trackers, tools, etc.)
/config
  ├── database.js           # Database connection setup
  ├── passport.js           # Authentication configuration
/models
  └── User.js               # User model
/routes
  └── auth.js               # Authentication routes
server.js                   # Express server entry point
package.json                # Project dependencies and scripts
README.md                   # This file
```

---

This README provides a detailed overview of the Wellness Pro app, its pages, features, backend integration, theme toggle, and setup instructions to help new developers understand and contribute to the project.
