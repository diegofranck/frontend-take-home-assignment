import { useNavigate } from "react-router-dom";
import buyAHouseLogo from "../../assets/icons/buy-a-house.svg";
import buyACarLogo from "../../assets/icons/buy-a-car.svg";
import useLocalStorage from "../../hooks/useLocalStorage";
import { IconButton } from "../../components/styled";
import SavingGoalCard from "./components/SavingGoalCard";

const goalsList = [
  {
    icon: buyAHouseLogo,
    slug: "buy-house",
    label: "Buy a house",
  },
  {
    icon: buyACarLogo,
    slug: "buy-car",
    label: "Buy a car",
  },
];

export default function DashboardPage() {
  const { data } = useLocalStorage();
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%" }}>
      {goalsList.map((goal) => {
        const persistedGoal = (data && data[goal.slug]) || null;

        return (
          <SavingGoalCard
            key={goal.slug}
            icon={goal.icon}
            label={goal.label}
            goal={persistedGoal}
            onClick={() => navigate(`/${goal.slug}`)}
          />
        );
      })}
    </div>
  );
}
