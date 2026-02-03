/**
 * ============================================
 * INTERNATIONALIZATION (i18n) - EN/VI SWITCH
 * ============================================
 */

// ========== TRANSLATIONS ==========
const translations = {
    // ===== COMMON (used across all pages) =====
    common: {
        // Navigation
        'nav.home': { en: 'Home', vi: 'Trang chủ' },
        'nav.about': { en: 'About', vi: 'Giới thiệu' },
        'nav.projects': { en: 'Projects', vi: 'Dự án' },
        'nav.experience': { en: 'Experience', vi: 'Kinh nghiệm' },
        'nav.roadmap': { en: 'Roadmap', vi: 'Lộ trình' },
        'nav.services': { en: 'Services', vi: 'Dịch vụ' },
        'nav.contact': { en: 'Contact', vi: 'Liên hệ' },
        
        // Footer
        'footer.brand.desc': { 
            en: 'System / Network / Security Engineer. Passionate about building stable, secure and automated systems.', 
            vi: 'System / Network / Security Engineer. Đam mê xây dựng hệ thống ổn định, bảo mật và tự động hóa.' 
        },
        'footer.navigation': { en: 'Navigation', vi: 'Điều hướng' },
        'footer.projects': { en: 'Projects', vi: 'Dự án' },
        'footer.contact': { en: 'Contact', vi: 'Liên hệ' },
        'footer.contactForm': { en: 'Contact Form', vi: 'Form liên hệ' },
        'footer.copyright': { 
            en: '© 2025 Võ Đào Huy Hoàng. All rights reserved.', 
            vi: '© 2025 Võ Đào Huy Hoàng. Bảo lưu mọi quyền.' 
        },
        'footer.madeWith': { 
            en: 'Made with ❤ using HTML, CSS & JavaScript', 
            vi: 'Được tạo với ❤ bằng HTML, CSS & JavaScript' 
        },
        
        // Buttons
        'btn.viewProjects': { en: 'View Projects', vi: 'Xem dự án' },
        'btn.contactMe': { en: 'Contact Me', vi: 'Liên hệ' },
        'btn.downloadCV': { en: 'Download CV', vi: 'Tải CV' },
        'btn.learnMore': { en: 'Learn More', vi: 'Tìm hiểu thêm' },
        'btn.viewAll': { en: 'View All', vi: 'Xem tất cả' },
        'btn.sendMessage': { en: 'Send Message', vi: 'Gửi tin nhắn' },
        'btn.orderNow': { en: 'Order Now', vi: 'Đặt hàng ngay' },
        'btn.viewDetails': { en: 'View Details', vi: 'Xem chi tiết' },
        'btn.getStarted': { en: 'Get Started', vi: 'Bắt đầu ngay' },
        
        // Breadcrumb
        'breadcrumb.home': { en: 'Home', vi: 'Trang chủ' },
    },

    // ===== INDEX PAGE =====
    index: {
        'hero.badge': { en: 'Available for opportunities', vi: 'Sẵn sàng cho cơ hội mới' },
        'hero.title': { en: 'System / Network / Security Engineer', vi: 'Kỹ sư Hệ thống / Mạng / Bảo mật' },
        'hero.subtitle': { 
            en: 'Cybersecurity student with experience in deploying Hybrid Infrastructure, Automation with Ansible, and Network Security. Passionate about building stable, secure, and highly automated systems.', 
            vi: 'Sinh viên An ninh mạng với kinh nghiệm triển khai Hybrid Infrastructure, Automation với Ansible, và Network Security. Đam mê xây dựng hệ thống ổn định, bảo mật và tự động hóa cao.' 
        },
        'hero.stats.projects': { en: 'Projects', vi: 'Dự án' },
        'hero.stats.gpa': { en: 'GPA', vi: 'GPA' },
        'hero.stats.awards': { en: 'Awards', vi: 'Giải thưởng' },
        'hero.stats.yearsExp': { en: 'Years Exp', vi: 'Năm KN' },
        
        // Expertise Section
        'expertise.badge': { en: 'Expertise', vi: 'Chuyên môn' },
        'expertise.title': { en: 'What I Do', vi: 'Chuyên môn chính' },
        'expertise.subtitle': { 
            en: 'Main expertise in System, Network and Security Engineering', 
            vi: 'Chuyên môn chính trong lĩnh vực System, Network và Security Engineering' 
        },
        
        // Cards
        'card.hybrid.title': { en: 'Hybrid Infrastructure', vi: 'Hạ tầng Hybrid' },
        'card.hybrid.subtitle': { en: 'VMware + Cloud Services', vi: 'VMware + Dịch vụ Cloud' },
        'card.hybrid.desc': { 
            en: 'Design and deploy hybrid systems combining On-Premise (VMware ESXi) with Cloud (Microsoft Entra ID, Intune, Autopilot).', 
            vi: 'Thiết kế và triển khai hệ thống hybrid kết hợp On-Premise (VMware ESXi) với Cloud (Microsoft Entra ID, Intune, Autopilot).' 
        },
        
        'card.automation.title': { en: 'Automation', vi: 'Tự động hóa' },
        'card.automation.subtitle': { en: 'Ansible Infrastructure as Code', vi: 'Ansible Infrastructure as Code' },
        'card.automation.desc': { 
            en: 'Automate Linux/Windows Server deployment and configuration with Ansible, ensuring consistency and reducing deployment time.', 
            vi: 'Tự động hóa triển khai và cấu hình hệ thống Linux/Windows Server với Ansible, đảm bảo consistency và giảm thời gian deployment.' 
        },
        
        'card.security.title': { en: 'Security', vi: 'Bảo mật' },
        'card.security.subtitle': { en: 'SIEM, IDS & Compliance', vi: 'SIEM, IDS & Compliance' },
        'card.security.desc': { 
            en: 'Deploy security solutions like Wazuh SIEM, Suricata IDS, OpenSCAP compliance checking and vulnerability scanning.', 
            vi: 'Triển khai các giải pháp bảo mật như Wazuh SIEM, Suricata IDS, OpenSCAP compliance checking và vulnerability scanning.' 
        },
        
        'card.network.title': { en: 'Network', vi: 'Mạng' },
        'card.network.subtitle': { en: 'Cisco, Mikrotik, Palo Alto', vi: 'Cisco, Mikrotik, Palo Alto' },
        'card.network.desc': { 
            en: 'Configure and deploy enterprise network devices including Router, Switch L2/L3, Firewall with protocols like VLAN, OSPF, ACL.', 
            vi: 'Cấu hình và triển khai thiết bị mạng doanh nghiệp bao gồm Router, Switch L2/L3, Firewall với các protocol như VLAN, OSPF, ACL.' 
        },
        
        'card.monitoring.title': { en: 'Monitoring', vi: 'Giám sát' },
        'card.monitoring.subtitle': { en: 'Prometheus, Grafana, Zabbix', vi: 'Prometheus, Grafana, Zabbix' },
        'card.monitoring.desc': { 
            en: 'Set up comprehensive monitoring systems with Prometheus metrics, Grafana dashboards and Zabbix alerting.', 
            vi: 'Thiết lập hệ thống monitoring toàn diện với Prometheus metrics, Grafana dashboards và Zabbix alerting.' 
        },
        
        'card.ai.title': { en: 'AI/ML', vi: 'AI/ML' },
        'card.ai.subtitle': { en: 'Computer Vision & Recognition', vi: 'Computer Vision & Nhận dạng' },
        'card.ai.desc': { 
            en: 'Apply machine learning with TensorFlow, PyTorch and OpenCV for object recognition and image processing problems.', 
            vi: 'Ứng dụng machine learning với TensorFlow, PyTorch và OpenCV cho các bài toán nhận diện đối tượng và xử lý ảnh.' 
        },
        
        // Featured Projects
        'projects.badge': { en: 'Portfolio', vi: 'Danh mục' },
        'projects.title': { en: 'Featured Projects', vi: 'Dự án nổi bật' },
        'projects.subtitle': { 
            en: 'Featured projects showcasing practical skills and experience', 
            vi: 'Các dự án nổi bật thể hiện năng lực và kinh nghiệm thực tế' 
        },
        
        'project.hybrid.title': { en: 'Hybrid Enterprise System', vi: 'Hệ thống Hybrid Enterprise' },
        'project.hybrid.desc': { 
            en: 'Hybrid system combining VMware ESXi On-Prem with Microsoft Cloud, including HA, monitoring and security.', 
            vi: 'Hệ thống Hybrid kết hợp VMware ESXi On-Prem với Microsoft Cloud, bao gồm HA, monitoring và security.' 
        },
        
        'project.ansible.title': { en: 'Ansible Automation Stack', vi: 'Ansible Automation Stack' },
        'project.ansible.desc': { 
            en: 'Complete automation system with Ansible for infrastructure deployment, configuration and monitoring.', 
            vi: 'Hệ thống tự động hóa hoàn chỉnh với Ansible cho việc triển khai, cấu hình và giám sát hạ tầng.' 
        },
        
        'project.parking.title': { en: 'Smart Parking LPR', vi: 'Bãi đỗ xe thông minh LPR' },
        'project.parking.desc': { 
            en: 'Smart parking system with AI license plate recognition, web management and mobile app.', 
            vi: 'Hệ thống bãi đỗ xe thông minh với AI nhận diện biển số, quản lý web và mobile app.' 
        },
        
        'project.car.title': { en: 'ESP32 IoT Car', vi: 'Xe IoT ESP32' },
        'project.car.desc': { 
            en: 'Smart car IoT with ESP32 control, camera, sensors and Flutter app remote control.', 
            vi: 'Xe IoT thông minh với ESP32 điều khiển, camera, cảm biến và Flutter app điều khiển từ xa.' 
        },
        
        // Certifications & Awards
        'certs.badge': { en: 'Achievements', vi: 'Thành tích' },
        'certs.title': { en: 'Certifications & Awards', vi: 'Chứng chỉ & Giải thưởng' },
        'certs.subtitle': { 
            en: 'Certificates and recognitions achieved during the learning and working process', 
            vi: 'Các chứng chỉ và công nhận đạt được trong quá trình học tập và làm việc' 
        },
        
        // CTA
        'cta.title': { en: "Let's Work Together", vi: 'Hãy hợp tác cùng nhau' },
        'cta.subtitle': { 
            en: 'I am always ready for new opportunities in System, Network and Security Engineering.', 
            vi: 'Tôi luôn sẵn sàng cho các cơ hội mới trong lĩnh vực System, Network và Security Engineering.' 
        },
    },

    // ===== ABOUT PAGE =====
    about: {
        'breadcrumb.current': { en: 'About', vi: 'Giới thiệu' },
        'profile.title': { en: 'System / Network / Security Engineer', vi: 'Kỹ sư Hệ thống / Mạng / Bảo mật' },
        'profile.summary': { 
            en: 'Cybersecurity student, oriented to become a System / Network / Security Engineer. Experienced in deploying Hybrid Infrastructure (On-Prem + Cloud), Automation with Ansible, Endpoint Management (Intune, Autopilot) and Network Security. Seeking to work in an enterprise environment to deploy, operate and optimize stable – secure – highly automated systems.', 
            vi: 'Sinh viên ngành An ninh mạng, định hướng phát triển thành System / Network / Security Engineer. Có kinh nghiệm triển khai Hybrid Infrastructure (On-Prem + Cloud), Automation với Ansible, Endpoint Management (Intune, Autopilot) và Network Security. Mong muốn làm việc trong môi trường doanh nghiệp để triển khai, vận hành và tối ưu hệ thống ổn định – bảo mật – tự động hóa cao.' 
        },
        
        // Education
        'education.badge': { en: 'Education', vi: 'Học vấn' },
        'education.title': { en: 'Education', vi: 'Học vấn' },
        'education.school': { en: 'Ho Chi Minh City University of Technology (HUTECH)', vi: 'Đại học Công nghệ TP.HCM (HUTECH)' },
        'education.degree': { en: 'Bachelor of Cybersecurity - Information Technology', vi: 'Cử nhân An ninh mạng - Ngành Công nghệ thông tin' },
        'education.outstanding': { en: 'Outstanding Student', vi: 'Sinh viên tiêu biểu' },
        'education.expected': { en: 'Expected Graduation', vi: 'Dự kiến tốt nghiệp' },
        'education.achievement': { en: 'Outstanding student every academic year', vi: 'Sinh viên tiêu biểu tất cả các năm học' },
        
        // Skills
        'skills.badge': { en: 'Skills', vi: 'Kỹ năng' },
        'skills.title': { en: 'Skills', vi: 'Kỹ năng' },
        'skills.programming': { en: 'Programming', vi: 'Lập trình' },
        'skills.aiml': { en: 'Machine Learning & AI', vi: 'Machine Learning & AI' },
        'skills.systems': { en: 'Systems & Cloud', vi: 'Hệ thống & Cloud' },
        'skills.network': { en: 'Network & Security', vi: 'Mạng & Bảo mật' },
        'skills.automation': { en: 'Automation & DevOps', vi: 'Tự động hóa & DevOps' },
        'skills.monitoring': { en: 'Monitoring & Security Tools', vi: 'Giám sát & Công cụ bảo mật' },
        'skills.iot': { en: 'IoT & Embedded', vi: 'IoT & Nhúng' },
        'skills.soft': { en: 'Soft Skills', vi: 'Kỹ năng mềm' },
        'skills.embedded': { en: 'Embedded Programming', vi: 'Lập trình nhúng' },
        
        // Soft skills
        'soft.research': { en: 'Self-research', vi: 'Tự nghiên cứu' },
        'soft.teamwork': { en: 'Teamwork', vi: 'Làm việc nhóm' },
        'soft.problem': { en: 'Problem Solving', vi: 'Giải quyết vấn đề' },
        'soft.document': { en: 'Documentation', vi: 'Viết tài liệu' },
        
        // Languages
        'lang.badge': { en: 'Languages', vi: 'Ngôn ngữ' },
        'lang.title': { en: 'Languages', vi: 'Ngoại ngữ' },
        'lang.vietnamese': { en: 'Vietnamese', vi: 'Tiếng Việt' },
        'lang.native': { en: 'Native', vi: 'Bản ngữ' },
        'lang.english': { en: 'English', vi: 'Tiếng Anh' },
        'lang.reading': { en: 'Reading/Understanding Technical Documents', vi: 'Đọc/Hiểu tài liệu kỹ thuật' },
        
        // Interests
        'interests.badge': { en: 'Interests', vi: 'Sở thích' },
        'interests.title': { en: 'Personal Interests', vi: 'Sở thích cá nhân' },
        'interests.homelab': { en: 'Building HomeLab, testing new technologies', vi: 'Xây dựng HomeLab, thử nghiệm công nghệ mới' },
        'interests.opensource': { en: 'Contributing to Open Source projects', vi: 'Đóng góp các dự án Open Source' },
        'interests.reading': { en: 'Reading technical documents & security research', vi: 'Đọc tài liệu kỹ thuật & nghiên cứu bảo mật' },
        'interests.music': { en: 'Listening to music & gaming', vi: 'Nghe nhạc & gaming' },
    },

    // ===== PROJECTS PAGE =====
    projects: {
        'breadcrumb.current': { en: 'Projects', vi: 'Dự án' },
        'hero.title': { en: 'My Projects', vi: 'Dự án của tôi' },
        'hero.subtitle': { 
            en: 'Projects I have participated in and developed in the fields of IT Infrastructure, Security and Automation', 
            vi: 'Các dự án đã tham gia và phát triển trong lĩnh vực IT Infrastructure, Security và Automation' 
        },
        
        // Filter
        'filter.all': { en: 'All', vi: 'Tất cả' },
        'filter.infrastructure': { en: 'Infrastructure', vi: 'Hạ tầng' },
        'filter.security': { en: 'Security', vi: 'Bảo mật' },
        'filter.automation': { en: 'Automation', vi: 'Tự động hóa' },
        'filter.iot': { en: 'IoT', vi: 'IoT' },
        'filter.aiml': { en: 'AI/ML', vi: 'AI/ML' },
        
        // Project status
        'status.completed': { en: 'Completed', vi: 'Hoàn thành' },
        'status.inProgress': { en: 'In Progress', vi: 'Đang phát triển' },
        'status.planned': { en: 'Planned', vi: 'Dự kiến' },
    },

    // ===== EXPERIENCE PAGE =====
    experience: {
        'breadcrumb.current': { en: 'Experience', vi: 'Kinh nghiệm' },
        'hero.title': { en: 'Work Experience', vi: 'Kinh nghiệm làm việc' },
        'hero.subtitle': { 
            en: 'Career development journey in IT Infrastructure & Support', 
            vi: 'Hành trình phát triển sự nghiệp trong lĩnh vực IT Infrastructure & Support' 
        },
        
        'timeline.badge': { en: 'Timeline', vi: 'Dòng thời gian' },
        'timeline.title': { en: 'Work Experience', vi: 'Kinh nghiệm làm việc' },
        'timeline.present': { en: 'Present', vi: 'Hiện tại' },
        
        // Job titles
        'job.itSupport': { en: 'IT Support Specialist', vi: 'Chuyên viên Hỗ trợ IT' },
        'job.intern': { en: 'IT Intern', vi: 'Thực tập sinh IT' },
        
        // Achievements
        'achievements.badge': { en: 'Achievements', vi: 'Thành tích' },
        'achievements.title': { en: 'Key Achievements', vi: 'Thành tích nổi bật' },
        'achievements.subtitle': { 
            en: 'Outstanding results achieved during work and study', 
            vi: 'Những kết quả nổi bật đạt được trong quá trình làm việc và học tập' 
        },
    },

    // ===== CONTACT PAGE =====
    contact: {
        'breadcrumb.current': { en: 'Contact', vi: 'Liên hệ' },
        'hero.title': { en: 'Get In Touch', vi: 'Liên hệ với tôi' },
        'hero.subtitle': { 
            en: 'Contact me if you have job opportunities, collaboration projects or any questions.', 
            vi: 'Hãy liên hệ với tôi nếu bạn có cơ hội việc làm, dự án hợp tác hoặc bất kỳ câu hỏi nào.' 
        },
        
        'info.title': { en: 'Contact Information', vi: 'Thông tin liên hệ' },
        'info.desc': { 
            en: "I'm always ready to listen and discuss new opportunities. Don't hesitate to contact!", 
            vi: 'Tôi luôn sẵn sàng lắng nghe và thảo luận về các cơ hội mới. Đừng ngần ngại liên hệ!' 
        },
        'info.email': { en: 'Email', vi: 'Email' },
        'info.phone': { en: 'Phone', vi: 'Điện thoại' },
        'info.location': { en: 'Location', vi: 'Địa chỉ' },
        'info.followMe': { en: 'Follow Me', vi: 'Theo dõi tôi' },
        
        // Form
        'form.title': { en: 'Send a Message', vi: 'Gửi tin nhắn' },
        'form.desc': { 
            en: 'Fill out the form below and I will respond as soon as possible.', 
            vi: 'Điền form bên dưới và tôi sẽ phản hồi sớm nhất có thể.' 
        },
        'form.name': { en: 'Full Name', vi: 'Họ và tên' },
        'form.namePlaceholder': { en: 'Enter your full name', vi: 'Nhập họ tên của bạn' },
        'form.email': { en: 'Email Address', vi: 'Địa chỉ Email' },
        'form.phone': { en: 'Phone Number', vi: 'Số điện thoại' },
        'form.subject': { en: 'Subject', vi: 'Chủ đề' },
        'form.subjectPlaceholder': { en: '-- Select a subject --', vi: '-- Chọn chủ đề --' },
        'form.subjectJob': { en: 'Job Opportunity', vi: 'Cơ hội việc làm' },
        'form.subjectProject': { en: 'Project Collaboration', vi: 'Hợp tác dự án' },
        'form.subjectConsulting': { en: 'Technical Consulting', vi: 'Tư vấn kỹ thuật' },
        'form.subjectOther': { en: 'Other', vi: 'Khác' },
        'form.message': { en: 'Message', vi: 'Nội dung tin nhắn' },
        'form.messagePlaceholder': { en: 'Your message content...', vi: 'Nội dung tin nhắn...' },
        'form.success': { 
            en: 'Thank you for contacting! I will respond as soon as possible.', 
            vi: 'Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.' 
        },
        
        // FAQ
        'faq.title': { en: 'Frequently Asked Questions', vi: 'Câu hỏi thường gặp' },
        'faq.q1': { en: 'Are you available for remote work?', vi: 'Bạn có sẵn sàng nhận việc remote không?' },
        'faq.a1': { 
            en: 'Yes, I am available for remote or hybrid work. With experience managing Azure Virtual Desktop and remote support, I can work effectively from anywhere.', 
            vi: 'Có, tôi sẵn sàng làm việc remote hoặc hybrid. Với kinh nghiệm quản lý Azure Virtual Desktop và hỗ trợ từ xa, tôi có thể làm việc hiệu quả từ bất kỳ đâu.' 
        },
        'faq.q2': { en: 'What is your expected salary?', vi: 'Mức lương mong muốn của bạn là bao nhiêu?' },
        'faq.a2': { 
            en: 'Salary depends on the position and scope of work. I am open to discussing to reach a reasonable agreement for both parties.', 
            vi: 'Mức lương phụ thuộc vào vị trí và scope công việc. Tôi sẵn sàng thảo luận để đạt được thỏa thuận hợp lý cho cả hai bên.' 
        },
        'faq.q3': { en: 'Can you start immediately?', vi: 'Bạn có thể bắt đầu làm việc ngay không?' },
        'faq.a3': { 
            en: 'I can start within 2-4 weeks from the date of receiving the official offer. This time is needed to complete procedures at the current company (if any).', 
            vi: 'Tôi có thể bắt đầu trong vòng 2-4 tuần kể từ ngày nhận được offer chính thức. Thời gian này cần thiết để hoàn thành thủ tục tại công ty hiện tại (nếu có).' 
        },
        'faq.q4': { en: 'Do you work on projects outside of IT Infra?', vi: 'Bạn có nhận làm project ngoài lĩnh vực IT Infra không?' },
        'faq.a4': { 
            en: 'Yes, I have experience in mobile development (Flutter), web development (HTML/CSS/JS, PHP) and IoT (ESP32). Feel free to contact to discuss!', 
            vi: 'Có, tôi có kinh nghiệm về mobile development (Flutter), web development (HTML/CSS/JS, PHP) và IoT (ESP32). Hãy liên hệ để thảo luận chi tiết!' 
        },
    },

    // ===== ROADMAP PAGE =====
    roadmap: {
        'breadcrumb.current': { en: 'Roadmap', vi: 'Lộ trình' },
        'hero.title': { en: 'My Roadmap', vi: 'Lộ trình của tôi' },
        'hero.subtitle': { 
            en: 'Learning and career development plan in the field of System, Network & Security Engineering', 
            vi: 'Kế hoạch học tập và phát triển sự nghiệp trong lĩnh vực System, Network & Security Engineering' 
        },
        
        'timeline.badge': { en: 'Learning Path 2026', vi: 'Lộ trình học tập 2026' },
        'timeline.title': { en: 'Learning Roadmap', vi: 'Lộ trình học tập' },
        
        'q1.title': { en: 'Q1 2026', vi: 'Q1 2026' },
        'q1.focus': { en: 'CCNA & Azure Fundamentals', vi: 'CCNA & Azure Fundamentals' },
        
        'q2.title': { en: 'Q2 2026', vi: 'Q2 2026' },
        'q2.focus': { en: 'Kubernetes & Docker Advanced', vi: 'Kubernetes & Docker Nâng cao' },
        
        'q3.title': { en: 'Q3 2026', vi: 'Q3 2026' },
        'q3.focus': { en: 'OSCP Preparation', vi: 'Chuẩn bị OSCP' },
        
        'q4.title': { en: 'Q4 2026', vi: 'Q4 2026' },
        'q4.focus': { en: 'Cloud Security & DevSecOps', vi: 'Cloud Security & DevSecOps' },
        
        'pipeline.badge': { en: 'In Progress', vi: 'Đang thực hiện' },
        'pipeline.title': { en: 'Projects Pipeline', vi: 'Pipeline dự án' },
        'pipeline.progress': { en: 'Progress', vi: 'Tiến độ' },
        
        'wishlist.badge': { en: 'Future Goals', vi: 'Mục tiêu tương lai' },
        'wishlist.title': { en: 'Tech Wishlist', vi: 'Danh sách công nghệ muốn học' },
        'wishlist.network': { en: 'Network', vi: 'Mạng' },
        'wishlist.security': { en: 'Security', vi: 'Bảo mật' },
        'wishlist.devops': { en: 'DevOps', vi: 'DevOps' },
    },

    // ===== SERVICES PAGE =====
    services: {
        'breadcrumb.current': { en: 'Services', vi: 'Dịch vụ' },
        'hero.title': { en: 'Services & Products', vi: 'Dịch vụ & Sản phẩm' },
        'hero.subtitle': { 
            en: 'IT solutions and services I provide for individuals and businesses', 
            vi: 'Các giải pháp và dịch vụ IT tôi cung cấp cho cá nhân và doanh nghiệp' 
        },
        
        'services.badge': { en: 'Services', vi: 'Dịch vụ' },
        'services.title': { en: 'IT Services', vi: 'Dịch vụ IT' },
        
        'service.network.title': { en: 'Network Setup', vi: 'Thiết lập Mạng' },
        'service.network.desc': { 
            en: 'Design and deploy enterprise network systems: VLAN, Firewall, VPN, WiFi...', 
            vi: 'Thiết kế và triển khai hệ thống mạng doanh nghiệp: VLAN, Firewall, VPN, WiFi...' 
        },
        
        'service.server.title': { en: 'Server Setup', vi: 'Thiết lập Server' },
        'service.server.desc': { 
            en: 'Install and configure Windows/Linux Server, AD, DNS, DHCP, File Server...', 
            vi: 'Cài đặt và cấu hình Windows/Linux Server, AD, DNS, DHCP, File Server...' 
        },
        
        'service.automation.title': { en: 'Automation', vi: 'Tự động hóa' },
        'service.automation.desc': { 
            en: 'Automate IT operations with Ansible, scripts, CI/CD pipelines...', 
            vi: 'Tự động hóa vận hành IT với Ansible, scripts, CI/CD pipelines...' 
        },
        
        'service.security.title': { en: 'Security Audit', vi: 'Kiểm toán Bảo mật' },
        'service.security.desc': { 
            en: 'Security assessment, vulnerability scanning, penetration testing...', 
            vi: 'Đánh giá bảo mật, quét lỗ hổng, kiểm tra xâm nhập...' 
        },
        
        'service.cloud.title': { en: 'Cloud Migration', vi: 'Di chuyển Cloud' },
        'service.cloud.desc': { 
            en: 'Migrate to Azure/AWS, configure Microsoft 365, Intune, Entra ID...', 
            vi: 'Di chuyển lên Azure/AWS, cấu hình Microsoft 365, Intune, Entra ID...' 
        },
        
        'service.support.title': { en: 'IT Support', vi: 'Hỗ trợ IT' },
        'service.support.desc': { 
            en: 'Remote/Onsite IT support, troubleshooting, maintenance...', 
            vi: 'Hỗ trợ IT từ xa/tại chỗ, xử lý sự cố, bảo trì...' 
        },
        
        'products.badge': { en: 'Products', vi: 'Sản phẩm' },
        'products.title': { en: 'Products', vi: 'Sản phẩm' },
        'products.comingSoon': { en: 'Coming Soon', vi: 'Sắp ra mắt' },
        
        'order.badge': { en: 'How to Order', vi: 'Cách đặt hàng' },
        'order.title': { en: 'Order Steps', vi: 'Các bước đặt hàng' },
        'order.step1': { en: 'Contact', vi: 'Liên hệ' },
        'order.step1.desc': { en: 'Contact via email or phone', vi: 'Liên hệ qua email hoặc điện thoại' },
        'order.step2': { en: 'Consult', vi: 'Tư vấn' },
        'order.step2.desc': { en: 'Discuss requirements and quote', vi: 'Thảo luận yêu cầu và báo giá' },
        'order.step3': { en: 'Deploy', vi: 'Triển khai' },
        'order.step3.desc': { en: 'Implement and handover', vi: 'Thực hiện và bàn giao' },
        'order.step4': { en: 'Support', vi: 'Hỗ trợ' },
        'order.step4.desc': { en: 'Post-deployment support', vi: 'Hỗ trợ sau triển khai' },
        
        'cta.title': { en: 'Need IT Services?', vi: 'Cần dịch vụ IT?' },
        'cta.desc': { 
            en: 'Contact me for free consultation about your IT needs!', 
            vi: 'Liên hệ ngay để được tư vấn miễn phí về nhu cầu IT của bạn!' 
        },
    },
};

// ========== LANGUAGE MANAGER ==========
const LanguageManager = {
    currentLang: 'vi',
    
    init() {
        // Load saved language from localStorage
        const savedLang = localStorage.getItem('language') || 'vi';
        this.setLanguage(savedLang, false);
        this.bindEvents();
        this.updateToggleButton();
    },
    
    setLanguage(lang, save = true) {
        this.currentLang = lang;
        document.documentElement.setAttribute('lang', lang);
        
        if (save) {
            localStorage.setItem('language', lang);
        }
        
        this.translatePage();
        this.updateToggleButton();
    },
    
    toggleLanguage() {
        const newLang = this.currentLang === 'vi' ? 'en' : 'vi';
        this.setLanguage(newLang);
    },
    
    updateToggleButton() {
        const toggleBtn = document.querySelector('.lang-toggle');
        if (toggleBtn) {
            const langText = toggleBtn.querySelector('.lang-text');
            if (langText) {
                langText.textContent = this.currentLang === 'vi' ? 'EN' : 'VI';
            }
        }
    },
    
    getTranslation(key, page = null) {
        // Try page-specific translations first
        if (page && translations[page] && translations[page][key]) {
            return translations[page][key][this.currentLang] || translations[page][key]['vi'];
        }
        
        // Fallback to common translations
        if (translations.common && translations.common[key]) {
            return translations.common[key][this.currentLang] || translations.common[key]['vi'];
        }
        
        return null;
    },
    
    translatePage() {
        // Detect current page
        const currentPage = this.detectCurrentPage();
        
        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key, currentPage);
            
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.placeholder = translation;
                    }
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        // Translate elements with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = this.getTranslation(key, currentPage);
            if (translation) {
                el.placeholder = translation;
            }
        });
        
        // Translate elements with data-i18n-title (for tooltips)
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translation = this.getTranslation(key, currentPage);
            if (translation) {
                el.title = translation;
            }
        });
        
        // Translate select options
        document.querySelectorAll('option[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key, currentPage);
            if (translation) {
                el.textContent = translation;
            }
        });
    },
    
    detectCurrentPage() {
        const path = window.location.pathname.toLowerCase();
        
        if (path.includes('about')) return 'about';
        if (path.includes('project')) return 'projects';
        if (path.includes('experience')) return 'experience';
        if (path.includes('contact')) return 'contact';
        if (path.includes('roadmap')) return 'roadmap';
        if (path.includes('services')) return 'services';
        
        // Default to index page
        return 'index';
    },
    
    bindEvents() {
        const toggleBtn = document.querySelector('.lang-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleLanguage());
        }
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
});

// Export for external use
window.LanguageManager = LanguageManager;
window.translations = translations;
