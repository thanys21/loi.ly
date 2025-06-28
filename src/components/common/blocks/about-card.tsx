interface Props {
    title?: string;
    description?: string;
}
const AboutCard = ({ title, description }: Props) => {
  return (<div className="p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600 italic mb-4">
              {description}
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-gray-500 text-sm">CEO at ThaNys project</p>
              </div>
            </div>
          </div>
  )
}

export default AboutCard