import { Button, Card, Heading, Input, Rating, Tag, Text, TextArea } from '@/components';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { withLayout } from '@/layout/layout';
import { MenuItem } from '@/interfaces/menu.interface';

const Home = ({firstCategory, menu}: HomeProps):JSX.Element => {

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

			<ul>
				{menu.map(c => (
					<li key={c._id.secondCategory}>
						{c._id.secondCategory}
					</li>
				))}
			</ul>
		</>
	);
};

export default withLayout(Home);

// SSR function
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const firstCategory = 0;
	const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, {firstCategory});
	return {
		props: {
			menu,
			firstCategory,
		},
	}
}
interface HomeProps extends Record<string, unknown>{
	firstCategory: number,
	menu: MenuItem[],
}
