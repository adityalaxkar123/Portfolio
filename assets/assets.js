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
      title: 'Doctor Appointment Booking System',
      description: 'A full-stack healthcare platform enhanced with AI. Features AI-powered skin disease detection, smart symptom-based doctor recommendations, and seamless patient-doctor video consultations—redefining digital healthcare.',
      bgImage: doctor,
      github: 'https://github.com/adityalaxkar123/public_doctor_appointment_booking-website-',
      preview: 'https://vaidyatek-frontend.onrender.com/',
      techStack: ['MongoDB', 'Express.js', 'Node.js', 'React', 'Tailwind CSS', 'HTML', 'Python', 'OpenCV', 'TensorFlow', 'EfficientNetV2B2']
    },
    {
      title: 'Garbage Classification AI Model',
      description: 'An intelligent deep learning model that classifies 6+ types of garbage and identifies recyclability, helping drive smart waste management solutions.',
      bgImage: garbageai,
      github: 'https://github.com/adityalaxkar123/aicte-internship',
      preview: null,
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'EfficientNetV2B2', 'Matplotlib', 'NumPy', 'Scikit-learn']
    },
    {
      title: 'Next-Gen Bharat',
      description: 'A modern podcast and community platform with 4 distinct user panels: User, Staff, Alumni, and Admin. Alumni can share resources and post blogs, while staff submit progress reports to admins—streamlining collaboration and knowledge sharing.',
      bgImage: nextgenbharat,
      github: 'https://github.com/adityalaxkar123/public_next-gen-bharat-podcaste-website-/tree/main',
      preview: 'https://next-gen-bharat.onrender.com',
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