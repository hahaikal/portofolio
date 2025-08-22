import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrls: string[];
}

export function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  imageUrls,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 w-full h-full">
      <div className="relative h-48 overflow-hidden">
        {imageUrls.length === 1 ? (
          <img
            src={imageUrls[0]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <Carousel className="w-full h-full">
            <CarouselContent>
              {imageUrls.map((imageUrl, index) => (
                <CarouselItem key={index}>
                  <img
                    src={imageUrl}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {imageUrls.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none" />
              </>
            )}
          </Carousel>
        )}
        
        {imageUrls.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {imageUrls.length} photos
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="flex items-start justify-between">
          <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {title}
          </span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex flex-1 flex-col">
        <div className="h-20 overflow-hidden mb-4 h-52">
          {description.split('\n').map((line, index) => (
            <p key={index} className="text-sm text-muted-foreground leading-relaxed">
              {line}
            </p>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary"
              className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-200 text-xs px-2 py-1 h-6 flex items-center whitespace-nowrap"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 mt-auto">
          {demoUrl && (
            <Button 
              asChild 
              variant="default" 
              size="sm"
              className="flex-1 hover:scale-105 transition-transform duration-200"
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button 
              asChild 
              variant="outline" 
              size="sm"
              className="flex-1 hover:scale-105 transition-transform duration-200"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}