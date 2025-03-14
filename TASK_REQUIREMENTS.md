# **Manage Payment Methods: Guile Web Developer Test Task**

# **📌 Overview**

Guile is a **barber marketplace platform** that allows clients to book and manage appointments. This test task focuses on building a **Saved Payment Methods screen**, where users can view, add, and remove payment methods in their Guile account.

You’ll be working from a **Figma design** (linked below) and using **mock data** to simulate an API response. We want to see how well you structure your code, manage state, and create a smooth user experience.

# **🎯 Task Requirements**

**Display Saved Payment Methods**

- Fetch **mocked payment data** (provided as a JSON file).
- Display each saved payment method as a **card**, showing:
    - **Card Type (Visa, Mastercard, etc.)**
    - **Last 4 digits of the card number**
    - **Expiration date**
    - **“Remove” button** to delete a card

**Add New Payment Method**

- Implement a **form to add a new card**, including:
    - **Card Number** (format: #### #### #### ####)
    - **Expiration Date** (MM/YY)
    - **CVC** (masked input, ***)
- Display **form validation errors** for incorrect inputs:
    - Invalid card number
    - Expired date
    - Missing CVC

**Handle API Simulation**

- Mock an **async API call** to simulate:
    
    ✅ Fetching payment methods
    
    ✅ Adding a new card
    
    ✅ Removing an existing card
    
- Show **loading states** when interacting with the API.