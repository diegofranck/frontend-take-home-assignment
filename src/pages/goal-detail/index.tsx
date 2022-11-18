import PlanSimulation from "../../components/PlanSimulation";
import Typography from "../../components/Typography";
import { colors } from "../../variables";

export default function GoalDetailPage() {
  return (
    <>
      <Typography
        data-testid="page-subtitle"
        variant="subtitle"
        color={colors.brandPrimary}
      >
        Let's plan your <strong>saving goal.</strong>
      </Typography>

      <PlanSimulation />
    </>
  );
}
