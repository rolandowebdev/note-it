import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, HStack, Stack } from '@chakra-ui/react'
import { CardTodo, Illustration } from '../../components'
import { PageContainer } from '../../layouts'

const comment = {
  veryHigh: 'very-high',
  high: 'high',
  normal: 'normal',
  low: 'low',
  veryLow: 'very-low',
}

const todos = [
  {
    id: 1,
    title: 'Steak Food',
    comment: comment.high,
    isChecked: false,
  },
  {
    id: 2,
    title: 'Spagheti Food',
    comment: comment.low,
    isChecked: true,
  },
  {
    id: 3,
    title: 'Chicken Fried Food',
    comment: comment.veryHigh,
    isChecked: false,
  },
  {
    id: 4,
    title: 'Lobster Food',
    comment: comment.veryLow,
    isChecked: false,
  },
  {
    id: 5,
    title: 'Seafood',
    comment: comment.normal,
    isChecked: false,
  },
  {
    id: 6,
    title: 'Vegetables Food',
    comment: comment.veryHigh,
    isChecked: false,
  },
  {
    id: 7,
    title: 'Diet Food',
    comment: comment.high,
    isChecked: false,
  },
]

export const Todo = () => {
  const card = true
  return (
    <PageContainer>
      <HStack justify="space-between" align="center">
        <Heading as="h1" size="lg" fontWeight="bold">
          Activity
        </Heading>
        <Button
          type="button"
          paddingX="7"
          paddingY="6"
          bgColor="brand.primary"
          color="white"
          letterSpacing="wider"
          fontWeight="medium"
          borderRadius="full"
          transition="background-color 150ms ease"
          leftIcon={<AddIcon />}
          _hover={{ bgColor: 'brand.lightPrimary' }}>
          Tambah
        </Button>
      </HStack>
      <Box mt={[16, 14, 12]}>
        {card ? (
          <Stack spacing="16px">
            {todos.map((todo) => (
              <CardTodo
                key={todo.id}
                title={todo.title}
                comment={todo.comment}
                isChecked={todo.isChecked}
              />
            ))}
          </Stack>
        ) : (
          <Illustration
            desc="Create your todo here"
            illustrationHuman="/images/human-todo.png"
            illustrationIcon="/images/todo.png"
            illustrationGround="/icons/ground-two.svg"
          />
        )}
      </Box>
    </PageContainer>
  )
}
