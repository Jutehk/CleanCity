
const STORAGE_KEYS = {
  PICKUP_REQUESTS: 'cleancity_pickup_requests',
  FEEDBACK: 'cleancity_feedback',
  USERS: 'cleancity_users',
  CURRENT_USER: 'currentUser'
};

const initializeData = () => {
  if (!localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS)) {
    const sampleRequests = [
      {
        id: 'REQ001',
        name: 'John Doe',
        location: 'Nairobi',
        wasteType: 'General Waste',
        preferredDate: '2024-01-15',
        status: 'Pending'
      },
      {
        id: 'REQ002',
        name: 'Jane Smith',
        location: 'Kisumu',
        wasteType: 'Recyclable',
        preferredDate: '2024-01-16',
        status: 'Scheduled'
      },
      {
        id: 'REQ003',
        name: 'Mike Johnson',
        location: 'Mombasa',
        wasteType: 'Hazardous',
        preferredDate: '2024-01-17',
        status: 'Completed'
      },
      {
        id: 'REQ004',
        name: 'Sarah Wilson',
        location: 'Eldoret',
        wasteType: 'General Waste',
        preferredDate: '2024-01-18',
        status: 'Pending'
      },
      {
        id: 'REQ005',
        name: 'David Brown',
        location: 'Nairobi',
        wasteType: 'Recyclable',
        preferredDate: '2024-01-19',
        status: 'Missed'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(sampleRequests));
  }

  if (!localStorage.getItem(STORAGE_KEYS.FEEDBACK)) {
    localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify([]));
  }

  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    const sampleUsers = [
      {
        id: '1',
        name: 'Demo User',
        email: 'user@cleancity.com',
        password: 'password123',
        role: 'user',
        createdAt: '2024-01-01T00:00:00.000Z'
      },
      {
        id: '2',
        name: 'Admin User',
        email: 'admin@cleancity.com',
        password: 'admin123',
        role: 'admin',
        createdAt: '2024-01-01T00:00:00.000Z'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(sampleUsers));
  }
};

const dataService = {
  getAllPickupRequests: () => {
    const data = localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS);
    return data ? JSON.parse(data) : [];
  },

  addPickupRequest: (requestData) => {
    const requests = dataService.getAllPickupRequests();
    const newRequest = {
      id: `REQ${String(requests.length + 1).padStart(3, '0')}`,
      name: requestData.fullName,
      location: requestData.location,
      wasteType: requestData.wasteType,
      preferredDate: requestData.preferredDate || 'Not specified',
      status: 'Pending'
    };
    requests.push(newRequest);
    localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(requests));
    return newRequest;
  },

  updateRequestStatus: (requestId, newStatus) => {
    const requests = dataService.getAllPickupRequests();
    const index = requests.findIndex(r => r.id === requestId);
    if (index !== -1) {
      requests[index].status = newStatus;
      localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(requests));
      return true;
    }
    return false;
  },

  filterRequestsByStatus: (status) => {
    const requests = dataService.getAllPickupRequests();
    return requests.filter(r => r.status === status);
  },

  filterRequestsByLocation: (location) => {
    const requests = dataService.getAllPickupRequests();
    if (location === 'Eldoret') {
      // Bug: returns Nairobi instead of Eldoret
      return requests.filter(r => r.location === 'Nairobi');
    }
    return requests.filter(r => r.location === location);
  },

  getAllFeedback: () => {
    const data = localStorage.getItem(STORAGE_KEYS.FEEDBACK);
    return data ? JSON.parse(data) : [];
  },

  addFeedback: (feedbackData) => {
    const feedback = dataService.getAllFeedback();
    const newFeedback = {
      id: Date.now(),
      requestId: feedbackData.requestId,
      reason: feedbackData.reason,
      comments: feedbackData.comments,
      timestamp: new Date().toISOString()
    };
    feedback.push(newFeedback);
    localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify(feedback));
    return newFeedback;
  },

  getAllUsers: () => {
    const data = localStorage.getItem(STORAGE_KEYS.USERS);
    return data ? JSON.parse(data) : [];
  },

  addUser: (userData) => {
    const users = dataService.getAllUsers();
    const existingUser = users.find(u => u.email === userData.email);
    if (existingUser) return false;
    users.push(userData);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    return true;
  },

  getUserByEmail: (email) => {
    const users = dataService.getAllUsers();
    return users.find(u => u.email === email);
  },

  getCurrentUser: () => {
    const userData = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return userData ? JSON.parse(userData) : null;
  },

  isAuthenticated: () => {
    return !!dataService.getCurrentUser();
  },

  clearAllData: () => {
    localStorage.clear();
    initializeData();
  }
};

initializeData();


module.exports = dataService; // ✅ CommonJS export

