class NotificationManager {
  static isSupported() {
    return typeof window !== "undefined" && "Notification" in window;
  }

  async requestPermission() {
    if (!NotificationManager.isSupported()) {
      throw new Error("Notifications non supportées par ce navigateur.");
    }

   
    if (Notification.permission === "granted") return "granted";

   
    if (Notification.permission === "denied") return "denied";

    
    const permission = await Notification.requestPermission();
    return permission; 
  }

  async show(title, options = {}) {
    if (!NotificationManager.isSupported()) {
      throw new Error("Notifications non supportées par ce navigateur.");
    }

    const perm = await this.requestPermission();
    if (perm !== "granted") {
      throw new Error("Permission notifications non accordée.");
    }

    
    const notif = new Notification(title, options);

    
    notif.onclick = (e) => {
      
      if (typeof window !== "undefined") window.focus();
      if (typeof options.onClick === "function") options.onClick(e);
    };

    notif.onclose = (e) => {
      if (typeof options.onClose === "function") options.onClose(e);
    };

    notif.onerror = (e) => {
      if (typeof options.onError === "function") options.onError(e);
    };

    
    if (typeof options.autoClose === "number") {
      setTimeout(() => notif.close(), options.autoClose);
    }

    return notif;
  }
}

class NotificationQueue {
  constructor(manager = new NotificationManager(), delayMs = 1200) {
    this.manager = manager;
    this.delayMs = delayMs;
    this.queue = [];
    this.processing = false;
  }

  add(title, options = {}) {
    this.queue.push({ title, options });
    this.processQueue(); 
  }

  async processQueue() {
    if (this.processing) return;
    this.processing = true;

    while (this.queue.length > 0) {
      const { title, options } = this.queue.shift();
      try {
        await this.manager.show(title, options);
      } catch (err) {
        
        console.error("Notification error:", err.message);
        if (
          NotificationManager.isSupported() &&
          Notification.permission === "denied"
        ) {
          break;
        }
      }

      
      await new Promise((r) => setTimeout(r, this.delayMs));
    }

    this.processing = false;
  }
}


