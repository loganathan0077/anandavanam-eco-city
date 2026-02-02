import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, gradient = false }: FeatureCardProps) => {
  return (
    <Card className={`transition-smooth hover:shadow-gold hover:-translate-y-2 ${gradient ? 'gradient-hero text-primary-foreground' : ''}`}>
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg ${gradient ? 'bg-primary-foreground/20' : 'bg-primary/10'} flex items-center justify-center mb-4`}>
          <Icon className={`h-6 w-6 ${gradient ? 'text-primary-foreground' : 'text-primary'}`} />
        </div>
        <CardTitle className={gradient ? 'text-primary-foreground' : ''}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={`${gradient ? 'text-primary-foreground/90' : ''} leading-relaxed`}>
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
