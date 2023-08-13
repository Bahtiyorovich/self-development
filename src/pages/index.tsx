import { Heading, Tag, Text } from '@/component';

const Home = () => {
	return (
		<div>
			<Heading tag='h1'>Heading test component</Heading>
			<Text size='s'>Text test component</Text>
			<Tag size='s' color='red'>
				Tag component
			</Tag>
		</div>
	);
};

export default Home;
