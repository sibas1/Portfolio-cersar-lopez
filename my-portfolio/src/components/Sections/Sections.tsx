interface SectionProps {
  id: string;
  title: string;
  content: string;
  isVisible: boolean;
  colors: {
    bg: string;
    text: string;
    accent: string;
    buttons: string;
  };
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  content,
  isVisible,
  colors,
}) => {
  return (
    <section
      id={id}
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        padding: "2rem",
        minHeight: "auto",
        backgroundColor: "transparent",
        color: colors.text,
        position: isVisible ? "relative" : "absolute",
        top: isVisible ? "auto" : "-9999px",
        transition: 'opacity 500ms ease-in-out'
      }}
    >
      <h2 style={{ color: colors.accent, transition: "color 1s ease-in-out" }}>
        {title}
      </h2>
      <p>{content}</p>
    </section>
  );
};

export default Section;
