import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
          <Box mr="4" textAlign="right">
          <Text>Felipe Silva Santos</Text>
          <Text color="gray.300" fontSize="sm">
            felipe.silva.santos.lawliet1@gmail.com
          </Text>
        </Box>      
      )}

      <Avatar size="md" name="Felipe Silva" src="https://github.com/feelpe.png" />
    </Flex>
  )
}