// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function userRegister( req: NextApiRequest, res: NextApiResponse) {
  const apiSimulation = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
  };

  try {
    apiSimulation()
      .then(() => {
        console.log('Simulating api call');
      })
      .finally(() => {
        res.status(200).json({ message: 'User registered with success!'})
      });    
  } catch (error) {
    res.status(400).json({ message: 'Error registering user!'})
  }
}