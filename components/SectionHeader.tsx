interface SectionHeaderProps {
    name: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    name
}) => {
    return(
        <h1 className="text-4xl lg:text-4xl mb-12">{name}</h1>
    )
}

export default SectionHeader;