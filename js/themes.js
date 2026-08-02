// ==========================================
// Theme Engine
// ==========================================

function applyTheme(theme){

    const root = document.documentElement;

    switch(theme){

        case "ocean":

            root.style.setProperty("--primary","#0EA5E9");
            root.style.setProperty("--secondary","#0284C7");
            root.style.setProperty("--pink","#38BDF8");
            break;

        case "forest":

            root.style.setProperty("--primary","#22C55E");
            root.style.setProperty("--secondary","#16A34A");
            root.style.setProperty("--pink","#4ADE80");
            break;

        case "sunset":

            root.style.setProperty("--primary","#F97316");
            root.style.setProperty("--secondary","#EA580C");
            root.style.setProperty("--pink","#FB923C");
            break;

        case "purple":

            root.style.setProperty("--primary","#8B5CF6");
            root.style.setProperty("--secondary","#7C3AED");
            root.style.setProperty("--pink","#A855F7");
            break;

        case "red":

            root.style.setProperty("--primary","#EF4444");
            root.style.setProperty("--secondary","#DC2626");
            root.style.setProperty("--pink","#F87171");
            break;

        case "cyan":

            root.style.setProperty("--primary","#06B6D4");
            root.style.setProperty("--secondary","#0891B2");
            root.style.setProperty("--pink","#67E8F9");
            break;

        case "pink":

            root.style.setProperty("--primary","#EC4899");
            root.style.setProperty("--secondary","#DB2777");
            root.style.setProperty("--pink","#F472B6");
            break;

        case "gold":

            root.style.setProperty("--primary","#F59E0B");
            root.style.setProperty("--secondary","#D97706");
            root.style.setProperty("--pink","#FBBF24");
            break;

        case "lavender":

            root.style.setProperty("--primary","#A855F7");
            root.style.setProperty("--secondary","#9333EA");
            root.style.setProperty("--pink","#C084FC");
            break;

        case "mint":

            root.style.setProperty("--primary","#10B981");
            root.style.setProperty("--secondary","#059669");
            root.style.setProperty("--pink","#6EE7B7");
            break;

        case "aurora":

            root.style.setProperty("--primary","#EC4899");
            root.style.setProperty("--secondary","#7C3AED");
            root.style.setProperty("--pink","#F9A8D4");

            document.body.style.background =
            "linear-gradient(135deg,#1e1b4b,#7C3AED,#EC4899)";

            break;

        default:

            root.style.setProperty("--primary","#7C3AED");
            root.style.setProperty("--secondary","#9333EA");
            root.style.setProperty("--pink","#EC4899");

    }

}
function applyTheme(theme){

    document.body.className = "";

    switch(theme){

        case "blue":
            document.body.classList.add("theme-blue");
            break;

        case "purple":
            document.body.classList.add("theme-purple");
            break;

        case "green":
            document.body.classList.add("theme-green");
            break;

        case "orange":
            document.body.classList.add("theme-orange");
            break;

        case "pink":
            document.body.classList.add("theme-pink");
            break;

        case "rose":
            document.body.classList.add("theme-rose");
            break;

        case "red":
            document.body.classList.add("theme-red");
            break;

        case "dark":
            document.body.classList.add("theme-dark");
            break;

        case "sky":
            document.body.classList.add("theme-sky");
            break;

        case "blossom":
            document.body.classList.add("theme-blossom");
            break;

        default:
            document.body.classList.add("theme-blue");
    }
}