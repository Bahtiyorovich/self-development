import { Button, Card, Heading, Input, Rating, Tag, Text, TextArea } from '@/components';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { withLayout } from '@/layout/layout';

const Home = () => {
	const [isClick, setIsClick] = useState(false);
	const [rating, setRating] = useState<number>(0);

	return (
		<>
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
		</>
	);
};

export default withLayout(Home);

// SSR function
export const getServerSideProps: GetServerSideProps = async () => {
	const {data} = await axios.post('http://localhost:8100/page-find', {firstCategory: 0});
	
	return {
		props: {
			data,
		},
	}
}

