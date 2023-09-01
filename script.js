const robotParts = [
    {
      name: "Microcontroller Board",
      category: "Electronic",
      price: 29.99,
      description: "Powerful microcontroller for controlling robot functions.",
      photo: "https://example.com/microcontroller.jpg"
    },
    {
      name: "Motor Kit",
      category: "Mechanical",
      price: 39.95,
      description: "High-torque motors for robot movement and mobility.",
      photo: "https://example.com/motor-kit.jpg"
    },
    {
      name: "Ultrasonic Sensor",
      category: "Electronic",
      price: 12.50,
      description: "Detects obstacles and measures distances using sound waves.",
      photo: "https://example.com/ultrasonic-sensor.jpg"
    },
    {
      name: "Camera Module",
      category: "Electronic",
      price: 45.99,
      description: "Captures images and videos for robot vision.",
      photo: "https://example.com/camera-module.jpg"
    },
    {
      name: "Robotics Starter Kit",
      category: "Robo-Kits",
      price: 89.99,
      description: "Beginner-friendly kit with essential components for building robots.",
      photo: "https://example.com/robotics-starter-kit.jpg"
    },
    {
      name: "Servo Motor",
      category: "Motors",
      price: 8.75,
      description: "Precise motor for controlling robot arm and joint movements.",
      photo: "https://example.com/servo-motor.jpg"
    }
  ];
  const menuItemsContainer = document.getElementById("menuItems");
  const categoryButtons = document.querySelectorAll(".heading header button");
  
  function displayItems(items) {
    const itemElements = items.map((item) => {
      return `
        <div class="item">
          <h1>${item.name}</h1>
          <p>${item.description}</p>
          <p>Price: $${item.price.toFixed(2)}</p>
        </div>`;
    });
    menuItemsContainer.innerHTML = itemElements.join("");
  }
  
  function filterItems(category) {
    if (category === "All") {
      displayItems(robotParts);
    } else {
      const filteredItems = robotParts.filter((item) => item.category === category);
      displayItems(filteredItems);
    }
  }
  
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.id;
      filterItems(category);
    });
  });
  displayItems(robotParts);
  
  ½