const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/favourite_food.png"),
        title: "Choose a Favourite Food",
        description: "When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards"
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: require("../assets/images/hot_delivery.png"),
        title: "Hot Delivery to Home",
        description: "We make food ordering fasr, simple and free-no matter if you order online or cash"
    },
    {
        id: 3,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/great_food.png"),
        title: "Receive the Great Food",
        description: "You’ll receive the great food within a hour. And get free delivery credits for every order."
    }
]

const screens = {
    main_layout: "MainLayout",
    home: "Home",
    search: "Search",
    cart: "Cart",
    favourite: "Favourite",
    notification: "Notification",
    my_wallet: "My Wallet",
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger"
    },
    {
        id: 2,
        label: "Fast Food"
    },
    {
        id: 3,
        label: "Pizza"
    },
    {
        id: 4,
        label: "Asian"
    },
    {
        id: 5,
        label: "Dessert"
    },
    {
        id: 6,
        label: "Breakfast"
    },
    {
        id: 7,
        label: "Vegetable"
    },
    {
        id: 8,
        label: "Taccos"
    }
]

const track_order_status = [
    {
        id: 1,
        title: "Order Confirmed",
        sub_title: "Your order has been received"
    },
    {
        id: 2,
        title: "Order Prepared",
        sub_title: "Your order has been prepared"
    },
    {
        id: 3,
        title: "Delivery in Progress",
        sub_title: "Hang on! Your food is on the way"
    },
    {
        id: 4,
        title: "Delivered",
        sub_title: "Enjoy your meal!"
    },
    {
        id: 5,
        title: "Rate Us",
        sub_title: "Help us improve our service"
    }
]

const tips = [
    {
        id: 1,
        label: "No Tips",
        value: 0
    },
    {
        id: 2,
        label: "$5",
        value: 5
    },
    {
        id: 3,
        label: "$10",
        value: 10
    },
    {
        id: 4,
        label: "$15",
        value: 15
    },
    {
        id: 5,
        label: "$20",
        value: 20
    }
]

const gender = [
    {
        id: 0,
        label: "Male",
        value: "Male"
    },
    {
        id: 1,
        label: "Female",
        value: "Female"
    },
]

const state = [
    {
        id: 0,
        label: "test0",
        value: "test0"
    },
    {
        id: 1,
        label: "test1",
        value: "test1"
    },
    {
        id: 2,
        label: "test2",
        value: "test2"
    },
    {
        id: 3,
        label: "test3",
        value: "test3"
    },
    {
        id: 4,
        label: "test4",
        value: "test4"
    },
    {
        id: 5,
        label: "test5",
        value: "test5"
    },
]

const GOOGLE_MAP_API_KEY = "[ Google API Key]"

export default {
    onboarding_screens,
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags,
    track_order_status,
    tips,
    gender,
    state,
    GOOGLE_MAP_API_KEY,
}