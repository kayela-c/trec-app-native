// list of links are stored here. The LinksArr consists for objects. The objects are being stored in a variable used for mapping called "arr". The objects have two properties, "linkName" and "linkList". linkList consists of an array of objects with properties that are mapped to linkCards

const LinksArr = [
    {
        linkName: 'Manage Sales License',
        linkList: [
            { id: 0, title: 'Renew License', icon: ' ', path: '/' },
            { id: 1, title: 'Check Application', icon: ' ', path: '/' },
            { id: 2, title: 'Update Contact Information', icon: ' ', path: '/' },
            { id: 3, title: 'Individual Broker License', icon: ' ', path: '/' },
            { id: 4, title: 'Manage My Sponsorship', icon: ' ', path: '/' },
            { id: 5, title: 'Reprint License', icon: ' ', path: '/' },
        ]
    },
    {
        linkName: 'Manage Appraisal License',
        linkList: [
            { id: 6, title: 'Appraiser Trainee', icon: '', path: '/'  },
            { id: 7, title: 'Certified General Appraiser', icon: '', path: '/' },
            { id: 8, title: 'Certified Residential Appraiser', icon: '', path: '/' },
            { id: 9, title: 'Licensed Residential Appraiser', icon: '', path: '/' },
        ]
    },
    {
        linkName: 'Manage Broker License',
        linkList: [
            { id: 10, title: 'Register Business Entity', path: '/' },
            { id: 11, title: 'Application for LLC Broker', path: '/' },
            { id: 12, title: 'Application - Corporate broker', path: '/' },
            { id: 13, title: 'Application - LLC broker', path: '/' },
            { id: 14, title: 'Broker Application - Partnership', path: '/' },
            { id: 15, title: 'Broker Application - RE Investment Trust', path: '/' },
            { id: 16, title: 'Business Entity Registration', path: '/' },
            { id: 17, title: 'Easement or Right-of-Way Agent Individual License', path: '/' },
            { id: 18, title: 'Easement or Right-of-Way Business License', path: '/' },
            { id: 19, title: 'Fitness Determination', path: '/' },
        ]
    },

];

export default LinksArr
