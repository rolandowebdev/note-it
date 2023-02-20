import { ChevronLeftIcon, UpDownIcon } from '@chakra-ui/icons'
import {
  Box,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
  CardTodo,
  EditableText,
  Illustration,
  ModalTodo,
  RouterLink,
} from '../../components'
import { sortOptions } from '../../constants/sortOptions'
import { comment } from '../../constants/todoPriority'
import { useActivityContext } from '../../context'
import { PageContainer } from '../../layouts'

const todos: any[] = [
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
]

export const Todo = () => {
  const { id } = useParams()
  const { setActivity, getOneActivity } = useActivityContext()

  const handleInputChange = (newValue: string) => {
    setActivity({ title: newValue })
  }

  useEffect(() => {
    getOneActivity(id)
  }, [id])

  return (
    <PageContainer>
      <HStack as="nav" justify="space-between" align="center" height="50px">
        <HStack alignItems="center">
          <RouterLink
            link="/"
            styles={{
              size: 'xs',
              ml: '-17px',
              display: 'flex',
              alignItems: 'center',
            }}
            hover={{ textDecor: 'underline', color: 'brand.primary' }}>
            <ChevronLeftIcon fontSize="5xl" />
          </RouterLink>
          <EditableText id={id} onChange={handleInputChange} />
        </HStack>
        <Stack direction="row" alignItems="center" spacing="16px">
          <Menu strategy="fixed">
            <MenuButton
              as={IconButton}
              variant="outline"
              rounded="full"
              height="48px"
              aria-label="sort todos"
              icon={<UpDownIcon color="gray.500" />}
              sx={{ aspectRatio: '1/1' }}
            />
            <MenuList>
              <MenuOptionGroup defaultValue="terbaru" type="radio">
                {sortOptions.map((sortOption) => (
                  <MenuItemOption
                    key={sortOption.text}
                    value={sortOption.value}>
                    <HStack alignItems="center">
                      <Image src={sortOption.icon} />
                      <Text>{sortOption.text}</Text>
                    </HStack>
                  </MenuItemOption>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <ModalTodo type="create" />
        </Stack>
      </HStack>
      <Box as="section" mt={[16, 14, 12]}>
        {todos.length < 0 ? (
          <Stack spacing="16px">
            {todos.map((todo) => (
              <CardTodo
                key={todo.id}
                title={todo.title}
                comment={todo.comment}
                checked={todo.isChecked}
              />
            ))}
          </Stack>
        ) : (
          <Illustration
            desc="Create your todo here"
            illustrationHuman="/images/human-todo.png"
            illustrationIcon="/images/todo.png"
            illustrationGround="/icons/ground.svg"
          />
        )}
      </Box>
    </PageContainer>
  )
}
