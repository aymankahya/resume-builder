
# Resume Builder

## Project Description

Resume Builder is a React-based web application designed to help users create professional resumes with ease. This interactive tool provides a user-friendly interface for inputting personal details, work experience, and educational background, and then compiles this information into a well-formatted resume in real-time.
  
<p align="center">
  <a href="https://app.netlify.com/sites/resume-pro-builder/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/1963b488-7b78-48c9-9e2d-6fb5e47ab3af/deploy-status" alt="Netlify Status" />
  </a>
</p>

![image](https://github.com/aymankahya/resume-builder/assets/63832251/f5d89aae-9ea2-42ff-8419-ca0acff82d8a)

## Key Features

- **Interactive Resume Building**: Users can input their information in a step-by-step process, with the resume updating in real-time.
- **Personal Details Section**: Allows users to input their job title, first name, last name, email address, phone number, and address.
- **Experience Section**: Users can add, edit, and delete multiple work experiences, including job title, company, start and end dates, and job description.
- **Education Section**: Enables users to add, edit, and delete educational qualifications, including school name, degree, start and end dates, and location.
- **Profile Picture Upload**: Users can upload a profile picture to be included in their resume.
- **Progress Tracking**: A progress bar indicates the completion level of the resume as users fill in different sections.
- **Real-time Resume Preview**: Users can view their resume in real-time as they input their information.
- **Responsive Design**: The application is designed to work well on various screen sizes.

## Technical Stack & Details

- **Frontend Framework**: React.js
- **Styling**: SASS/SCSS for advanced styling
- **Dynamic Rendering**: Conditional rendering is used to display different sections based on user input and interaction


## Project Structure

The project is organized into several key directories:

- `/src`: Contains the main source code
  - `/components`: React components organized by functionality
    - `/Left Side`: Components for the input side of the application
    - `/Right Side`: Components for the resume preview
  - `/styles`: SCSS files for styling the application
  - `App.jsx`: The main application component

## How It Works

1. Users input their information in the left side of the application through various form sections.
2. As information is entered, the state is updated in the main App component.
3. The updated state is passed down to the resume preview component on the right side.
4. The resume preview updates in real-time, reflecting the user's input.
5. Users can expand/collapse different sections, add/remove experiences and education entries, and upload a profile picture.
6. The progress bar updates based on the completion of different sections.

## Future Enhancements

- Multiple resume templates to choose from
- Option to export resume as PDF
- Integration with job application platforms
- Advanced customization options for layout and styling
