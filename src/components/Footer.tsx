
import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yatrik-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-yatrik-primary" />
              <span className="text-xl font-bold">Yatrik</span>
            </div>
            <p className="text-slate-300">
              Your personal travel companion for exploring the world with confidence and freedom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">Home</a></li>
              <li><a href="#features" className="text-slate-300 hover:text-yatrik-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-slate-300 hover:text-yatrik-primary transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-slate-300 hover:text-yatrik-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">Download</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">Travel Guides</a></li>
              <li><a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-yatrik-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yatrik-primary" />
                <a href="mailto:hello@yatrik.app" className="text-slate-300 hover:text-yatrik-primary transition-colors">hello@yatrik.app</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yatrik-primary" />
                <a href="tel:+1234567890" className="text-slate-300 hover:text-yatrik-primary transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Yatrik. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-yatrik-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-yatrik-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-yatrik-primary text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
