interface SectionProps {
    id: string;
    title: string;
    content: string;
    isVisible: boolean;
  }
  
  const Section: React.FC<SectionProps> = ({ id, title, content, isVisible }) => {
    return (
      <section
        id={id}
        style={{
          display: isVisible ? "block" : "none", 
          padding: "2rem",
          minHeight: "auto",
        }}
      >
        <h2>{title}</h2>
        <p>{content}</p>
      </section>
    );
  };
  
  export default Section;