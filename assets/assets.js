import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './Logo_no_bg.png';
import logo_dark from './Logo_dark_no_bg.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import edunet from './edunet.jpg';
import gssoc from './gssoc.jpg';
import hacksagom from './hacksagom.jpg';
import codathon from './codathon.jpg';
import doctor from './doctor-appointment.jpg'
import nextgenbharat from './next-gen-bharat.jpg'
import garbageai from './garbage-ai.jpg'


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    edunet,
    gssoc,
    hacksagom,
    codathon
};

export const workData = [
    {
      title: 'Doctor Appointment Management System (MERN + AI) | 2024–Present',
      description: 'Built a full-scale healthcare platform with separate User, Doctor, and Admin panels. Implemented AI skin disease detection and symptom-based disease & medication suggestions. Enabled 1:1 video consultations (WebRTC) and AI-based prescription generation. Integrated Razorpay payment gateway for appointments, lab tests, and medicine orders.',
      bgImage: doctor,
      github: 'https://github.com/adityalaxkar123/public_doctor_appointment_booking-website-',
      preview: 'https://vaidyatek-frontend.onrender.com/',
      techStack: ['MongoDB', 'Express.js', 'Node.js', 'React', 'Tailwind CSS', 'HTML', 'Python', 'OpenCV', 'TensorFlow', 'EfficientNetV2B2']
    },
    {
      title: 'AI Garbage Classification Model | 2025',
      description: 'Developed a CNN-based waste classification model achieving 94% validation accuracy. Applied data augmentation and preprocessing to improve model generalization.',
      bgImage: garbageai,
      github: 'https://github.com/adityalaxkar123/aicte-internship',
      preview: null,
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'EfficientNetV2B2', 'Matplotlib', 'NumPy', 'Scikit-learn']
    },
    {
      title: 'Next-Gen Bharat Podcast Platform (Production) | 2025',
      description: 'Built a real-world, live platform with 1K+ active users. Designed Admin, Staff, and Alumni panels with role-based access. Implemented TinyMCE-based post creation with AI content suggestion.',
      bgImage: nextgenbharat,
      github: 'https://github.com/adityalaxkar123/public_next-gen-bharat-podcaste-website-/tree/main',
      preview: 'https://next-gen-bharat-fx47.vercel.app',
      techStack: ['MongoDB', 'Express.js', 'Node.js', 'React', 'Tailwind CSS', 'CSS', 'HTML', 'TinyMCE', 'Cloudinary']
    }
  ]
  
export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, Java, Python' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science (nit manipur)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];