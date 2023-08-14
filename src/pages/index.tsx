import { Button, Card, Heading, Input, Rating, Tag, Text, TextArea } from '@/component';
import { useState } from 'react';

const Home = () => {
	const [isClick, setIsClick] = useState(false);
	const [rating, setRating] = useState<number>(4);

	return (
		<div>
			<Heading tag='h1'>Heading test component</Heading>
			<Text size='s'>Text test component</Text>
			<Tag size='s' color='red'>
				Tag component
			</Tag>
			<br />
			<Button appearance='primary'>primary btn</Button>
			<Button appearance='ghost' arrow={isClick ? 'down' : 'right'} onClick={() => setIsClick(prev => !prev)}>
				right
			</Button>
			<Button appearance='ghost' arrow='down'>
				down
			</Button>
			<br />
			<Input placeholder='username' />
			<div>
				<TextArea placeholder='Enter some text' />
			</div>
			<Rating rating={rating} isEditable={true} setRating={setRating} />
			<Card color='primary'>Card Component</Card>
			<Card color='white'>Card Component</Card>
		</div>
	);
};

export default Home;
